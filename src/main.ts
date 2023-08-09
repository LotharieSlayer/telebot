import { Telegraf, Context } from 'telegraf';
import * as fs from 'fs';
import path from 'path';
import { callback_query, channel_post, chat_join_request, chat_member, chosen_inline_result, edited_channel_post, edited_message, inline_query, message, my_chat_member, poll, poll_answer, pre_checkout_query, shipping_query } from './utils/dispatcher';

export class Bot extends Telegraf<Context> {
	public static _pluginsPath: string;
	private readonly _config: any;

	constructor() {
		const configPath = path.join(__dirname, 'config.json');
		const configFile = fs.readFileSync(configPath, 'utf8');
		const config = JSON.parse(configFile);
		super(config.TELEGRAM_BOT_TOKEN);
		this._config = config;
		Bot._pluginsPath = path.resolve(__dirname, 'plugins');
		this.loadPlugins();
	}

	// Load plugins
	loadPlugins() {
		const INIT_FILENAME = __dirname.includes('dist') ? 'init.js' : 'init.ts';

		const plugins = fs.readdirSync(Bot._pluginsPath, { withFileTypes: true })
			.filter(dirent => dirent.isDirectory())
			.map(dirent => dirent.name);

		console.log(`${plugins.length} plugin(s) trouvé(s) !`);
		let nb_plugins_charges = 0;

		for (const plugin of plugins) {
			console.log(`Chargement du plugin '${plugin}'.`);

			const folders = fs.readdirSync(`${Bot._pluginsPath}/${plugin}`, { withFileTypes: true })
				.filter(dirent => dirent.isDirectory() || dirent.name === INIT_FILENAME)
				.map(dirent => dirent.name);

			if (folders.includes(INIT_FILENAME)) {
				const plug = require(`${Bot._pluginsPath}/${plugin}/${INIT_FILENAME}`);
				if ('ENABLED' in plug && !plug.ENABLED) {
					console.log('Plugin ignoré car désactivé (plugin.json) !');
					continue;
				}
				if ('init' in plug) {
					plug.init(this);
				}
			}

			if (folders.includes('commands')) { this.loadCommands(plugin); }
			nb_plugins_charges++;
		}
		
		this.loadEvents();
		console.log(`${nb_plugins_charges} plugin(s) chargé(s) !`);
	}

	// Load commands from a plugin into the bot.
	loadCommands(plugin: string) {
		const commandsPath = path.join(Bot._pluginsPath, plugin, 'commands');
		const commands = fs.readdirSync(commandsPath, { withFileTypes: true })
			.filter(filent => filent.isFile() && !filent.name.endsWith('.map'))
			.map(filent => filent.name);

		for (const command of commands) {
			console.log(`\t commande : ${command}`);
			const data = require(`${commandsPath}/${command}`);
			const command_name = command.split('.')[0];
			this.command(command_name, data.execute);
		}
	}

	// Load events from a plugin into the bot.
	loadEvents() {
		// Files possible of type Filter (which extends of UpdateType) :
		// "message" | "poll" | "callback_query" | "channel_post" | "chat_member" |
		// "chosen_inline_result" | "edited_channel_post" | "edited_message" | "inline_query" | "my_chat_member" |
		// "pre_checkout_query" | "poll_answer" | "shipping_query" | "chat_join_request"
		this.on("message", message);
		this.on("poll", poll);
		this.on("callback_query", callback_query);
		this.on("channel_post", channel_post);
		this.on("chat_member", chat_member);
		this.on("chosen_inline_result", chosen_inline_result);
		this.on("edited_channel_post", edited_channel_post);
		this.on("edited_message", edited_message);
		this.on("inline_query", inline_query);
		this.on("my_chat_member", my_chat_member);
		this.on("pre_checkout_query", pre_checkout_query);
		this.on("poll_answer", poll_answer);
		this.on("shipping_query", shipping_query);
		this.on("chat_join_request", chat_join_request);
	}

	// Start the bot.
	startBot() {
		this.launch();
		console.log('Telebot est en ligne à ' + new Date().toLocaleString() + ' !');
	}
}

// Launch the bot.
const bot = new Bot();
bot.startBot();