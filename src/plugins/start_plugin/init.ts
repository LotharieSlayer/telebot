import { Telegraf } from "telegraf";

export function init(bot: Telegraf) {
	console.log('\t init : Start plugin loop initialized');
	setInterval(() => {
		// bot.telegram.sendMessage(00000000, 'Hello world !');
	}, 10000);
}