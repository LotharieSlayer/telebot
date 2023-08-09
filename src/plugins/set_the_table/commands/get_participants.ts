import enmapSetTheTable from "../utils/enmap";
import { Context } from 'telegraf';

export function execute(ctx: Context) {
	const participants = enmapSetTheTable.get(ctx.chat.id.toString()).participants;
	if(!participants) return ctx.reply("No participants registered.");
	ctx.reply("Participants registered : " + participants.join(", "));
}