# Telebot
Hyper-modular Telegram plugin bot in Typescript using Telegraf, Enmap.

# Prerequisites
- [Node v18.x](https://github.com/nvm-sh/nvm)

# Installation
- `npm i` then `npm run start`, it's that simple!
- You just need to add your token bot in `src/config.json` from [BotFather /token](https://t.me/botfather) !
- If you want to start using the set_the_table plugin example, go set your ChatID in `src/plugins/set_the_table/files/config.json`

# How To Use
This project is the core of your next Telegram bot, plugins has specific constraints to make it easy to program. To create a new plugin, create a new folder under `plugins/`, name it. After that you want to have a `commands/` and `events/` folder. It is where you can set commands to use for your Telegram bot, and get events from Telegram API when receiving interactions. Go check the two plugin examples I did! In each plugins you can add an init.ts file with an init() function to start automatically loops for example at launches of the bot!

# Register commands to BotFather
Go again to the conversation with BotFather to /setcommands of these two plugins examples !
```
start - Hello!
help - Get help!
get_meals - Get the registered meals
set_meals - Set the meals
get_participants - Get participants for setting the table
set_participants - Set participants for setting the table
skip - Skip the designated person for setting the table
disable_set_the_table - Disable the feature
```

# Notes
I don't use Scenes and WizardScene in theses plugins examples, I think they are too complex for nothing, but I may be wrong and feel free to integrate it, i'm open to PR!

Also like [WhatThePhoqueBOT](https://github.com/LotharieSlayer/wtpbot), another bot in this same plugins system way but for Discord, I may have the attention to make MongoDB integration, but for the moment I think it is too overkill.

# Librairies
- [Telegraf](https://github.com/telegraf/telegraf)
- [Enmap](https://github.com/eslachance/enmap)


# License (CC BY-NC-ND 4.0)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.
