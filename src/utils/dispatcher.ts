import * as fs from 'fs';
import path from 'path';
import { Bot } from '@src/main';
import { Context } from 'telegraf';

export function callEvents(eventToCall: string, ctx: Context) {
	const plugins = fs.readdirSync(Bot._pluginsPath, { withFileTypes: true })
			.filter(dirent => dirent.isDirectory())
			.map(dirent => dirent.name);

	for (const plugin of plugins) {
		const eventsPath = path.join(Bot._pluginsPath, plugin, 'events');
		const events = fs.readdirSync(eventsPath, { withFileTypes: true })
			.filter(filent => filent.isFile() && !filent.name.endsWith('.map'))
			.map(filent => filent.name);

		for (const event of events) {
			if(!event.startsWith(eventToCall)) continue;
			const data = require(`${eventsPath}/${event}`);
			data.execute(ctx);
		}
	}
}

// Files possible of type Filter (which extends of UpdateType) :
		// "message" | "poll" | "callback_query" | "channel_post" | "chat_member" |
		// "chosen_inline_result" | "edited_channel_post" | "edited_message" | "inline_query" | "my_chat_member" |
		// "pre_checkout_query" | "poll_answer" | "shipping_query" | "chat_join_request"

export function message(ctx: Context) {
	callEvents('message', ctx);
}

export function poll(ctx: Context) {
	callEvents('poll', ctx);
}

export function callback_query(ctx: Context) {
	callEvents('callback_query', ctx);
}

export function channel_post(ctx: Context) {
	callEvents('channel_post', ctx);
}

export function chat_member(ctx: Context) {
	callEvents('chat_member', ctx);
}

export function chosen_inline_result(ctx: Context) {
	callEvents('chosen_inline_result', ctx);
}

export function edited_channel_post(ctx: Context) {
	callEvents('edited_channel_post', ctx);
}

export function edited_message(ctx: Context) {
	callEvents('edited_message', ctx);
}

export function inline_query(ctx: Context) {
	callEvents('inline_query', ctx);
}

export function my_chat_member(ctx: Context) {
	callEvents('my_chat_member', ctx);
}

export function pre_checkout_query(ctx: Context) {
	callEvents('pre_checkout_query', ctx);
}

export function poll_answer(ctx: Context) {
	callEvents('poll_answer', ctx);
}

export function shipping_query(ctx: Context) {
	callEvents('shipping_query', ctx);
}

export function chat_join_request(ctx: Context) {
	callEvents('chat_join_request', ctx);
}