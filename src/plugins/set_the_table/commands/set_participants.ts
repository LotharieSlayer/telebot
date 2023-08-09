import { tempSetTheTable } from "../init";
import enmapSetTheTable from "../utils/enmap";
import { Context } from 'telegraf';

export function execute(ctx: Context) {
	tempSetTheTable.set(ctx.chat.id, { command: "set_participants", timestamp: Date.now() });
	ctx.reply("Who are the participants ? (separated by commas)");
}