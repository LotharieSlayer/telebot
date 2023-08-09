import { ChatID, CommandRetention } from "@src/types/types";
import { Telegraf } from "telegraf";
import enmapSetTheTable from "./utils/enmap";
import { SetTheTableType } from "./types/types";

export const tempSetTheTable = new Map<ChatID, CommandRetention>();

export function init(bot: Telegraf) {
	console.log('\t init : Set The Table loop initialized');
	setInterval(() => {
		for(const [key, value] of tempSetTheTable) {
			if(Date.now() - value.timestamp > 120000) {
				tempSetTheTable.delete(key);
			}
		}

		// For each key (ChatID), send if we are exactly at the minute to who it is to set the table (participants[turn]) then do turn + 1
		const setTables = enmapSetTheTable.entries();
		console.log(setTables);
		if(!setTables) return;
		for(const [key, value] of setTables) {
			console.log(key);
			console.log(value);
			const participants = value.participants;
			let turn = value.turn;
			const meals = value.meals;

			if(!participants || !meals) continue;

			const now = new Date();
			const minutes = now.getHours() * 60 + now.getMinutes();
			console.log(minutes);

			for(const meal of meals) {
				if(minutes === meal.time) {
					const participant = participants[turn];
					bot.telegram.sendMessage(key, `${participant} va mettre la table !`);
					if(turn >= participants.length - 1) {
						turn = -1;
					}	
					enmapSetTheTable.set(key.toString(), { participants, meals, turn: turn + 1 } as SetTheTableType);
				}
			}

		}
	}, 60000);
}