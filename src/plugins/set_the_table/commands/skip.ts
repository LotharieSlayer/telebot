import enmapSetTheTable from "../utils/enmap";
import { Context } from 'telegraf';

export function execute(ctx: Context) {
	const existing = enmapSetTheTable.get(ctx.chat.id.toString());
	if(!existing) return ctx.reply("No meal or participants registered.");
	if(existing.turn >= existing.participants.length - 1) existing.turn = - 1;
	
	enmapSetTheTable.set(ctx.chat.id.toString(), { ...existing, turn: existing.turn + 1 });
	if(existing.turn === -1) return ctx.reply("It is " + existing.participants[existing.participants.length - 1] + "'s turn to set the table because the previous person has been skipped.");
	ctx.reply("It is " + existing.participants[existing.turn] + "'s turn to set the table because the previous person has been skipped.");
}