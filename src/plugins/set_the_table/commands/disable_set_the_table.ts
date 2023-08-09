import enmapSetTheTable from "../utils/enmap";
import { Context } from 'telegraf';

export function execute(ctx: Context) {
	enmapSetTheTable.delete(ctx.chat.id.toString());
	ctx.reply("SetTheTable disabled in this group.");
}