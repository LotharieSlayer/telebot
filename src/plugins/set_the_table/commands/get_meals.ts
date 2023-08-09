import enmapSetTheTable from "../utils/enmap";
import { Context } from 'telegraf';

export function execute(ctx: Context) {
	const meals = enmapSetTheTable.get(ctx.chat.id.toString()).meals;
	if(!meals) return ctx.reply("No meals registered.");
	ctx.reply("Meals registered :\n\t" + meals.map((meal) => meal.name + " - " + Math.floor(meal.time / 60) + ":" + (meal.time % 60).toString().padStart(2, "0")).join("\n\t"));
}