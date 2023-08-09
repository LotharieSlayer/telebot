import { Context } from "telegraf";
import enmapSetTheTable from "../utils/enmap";
import { MealType, SetTheTableType } from "../types/types";
import { tempSetTheTable } from "../init";

export async function set_meals(text: string, ctx: Context) {
	const meals_s = text.split(",").map((meal) => meal.trim());
	const mealsRegex = /^([a-zA-Z0-9_]+) - ([0-9]{2}:[0-9]{2})$/;
	for (const meal of meals_s) {
		if (!mealsRegex.test(meal)) {
			ctx.reply("The format of the meals is not good. Please respect the following format: meal_name - 00:00");
			return;
		}
	}

	let meals : MealType[] = [];
	for (const meal of meals_s) {
		const meal_s = meal.split(" - ");
		meals.push({
			name: meal_s[0],
			time: parseInt(meal_s[1].split(":")[0]) * 60 + parseInt(meal_s[1].split(":")[1]),
		});
	}

	const existing = enmapSetTheTable.get(ctx.chat.id.toString());
	let setTheTableObject: SetTheTableType;
	if (!existing) {
		setTheTableObject = {
			meals,
			participants: null,
			turn: 0,
		};
	} else {
		setTheTableObject = {
			...existing,
			meals,
		};
	}
	if(setTheTableObject.turn === null) {
		setTheTableObject.turn = 0;
	}
	enmapSetTheTable.set(ctx.chat.id.toString(), setTheTableObject);
	tempSetTheTable.delete(ctx.chat.id);
	ctx.reply("Meals registered :\n\t" + meals.map((meal) => meal.name + " - " + Math.floor(meal.time / 60) + ":" + (meal.time % 60).toString().padStart(2, "0")).join("\n\t"));
}