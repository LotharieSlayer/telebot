import { Context } from 'telegraf';

export function execute(ctx: Context) {
	ctx.reply('Commands available :\n' +
		'/start - Start the bot\n' +
		'/help - Display help'
	);
}