import { Context } from 'telegraf';
import { Message } from 'typegram';

export function execute(ctx: Context) {
	if(ctx.message && 'text' in ctx.message) {
		const messageText = (ctx.message as Message.TextMessage).text;
		console.log(ctx.message);
		if (messageText) {
			ctx.reply(`You said: "${messageText}"`);
		}
	}
}
