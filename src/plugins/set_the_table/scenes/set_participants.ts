import { Context } from "telegraf";
import enmapSetTheTable from "../utils/enmap";
import { SetTheTableType } from "../types/types";
import { tempSetTheTable } from "../init";

export async function set_participants(text: string, ctx: Context) {
	const participants = text.split(",").map((participant) => participant.trim());
	const existing = enmapSetTheTable.get(ctx.chat.id.toString());
	let setTheTableObject: SetTheTableType;
	if (!existing) {
		setTheTableObject = {
			participants,
			meals: null,
			turn: 0,
		};
	} else {
		setTheTableObject = {
			...existing,
			participants,
		};
	}
	enmapSetTheTable.set(ctx.chat.id.toString(), setTheTableObject);
	tempSetTheTable.delete(ctx.chat.id);
	ctx.reply("Participants registered : " + participants.join(", "));
}