import { tempSetTheTable } from "../init";
import enmapSetTheTable from "../utils/enmap";
import { Context } from 'telegraf';

export function execute(ctx: Context) {
	tempSetTheTable.set(ctx.chat.id, { command: "set_meals", timestamp: Date.now() });
	ctx.reply("When do you eat ? (format meal_name - 00:00) (separated by commas)");
}