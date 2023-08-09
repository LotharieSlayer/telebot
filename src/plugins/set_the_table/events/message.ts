import { CommandRetention } from '@src/types/types';
import { Context } from 'telegraf';
import { Message } from 'typegram';
import { tempSetTheTable } from '../init';
import { set_participants } from '../scenes/set_participants';
import { set_meals } from '../scenes/set_meals';

export function execute(ctx: Context) {
	if(ctx.message && 'text' in ctx.message) {
		const messageText = (ctx.message as Message.TextMessage).text;
		console.log(ctx.message);
		const commandRetention = tempSetTheTable.get(ctx.chat.id) as CommandRetention;
		if(!commandRetention) return;
		switch(commandRetention.command) {
			case 'set_participants':
				set_participants(messageText, ctx);
				break;
			case 'set_meals':
				set_meals(messageText, ctx);
				break;
			default:
				break;
		}
	}
}

