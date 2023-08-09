# Telebot
<h3 align="center"><img src="https://github.com/LotharieSlayer/telebot/assets/49253492/aac7b741-3198-4b9a-b6ef-404ffdafb2e3" width="400px">
<br/>
<br/>
A hyper-modular Telegram plugin bot in Typescript using Telegraf and Enmap.
</h3>

# Prerequisites
- [Node v18.x](https://github.com/nvm-sh/nvm)

# Installation
- Run `npm i` and then `npm run start`, it's as simple as that!
- Don't forget to add your bot token to `src/config.json` from [BotFather /token](https://t.me/botfather)!
- If you want to start using the set_the_table plugin example, set your ChatID in `src/plugins/set_the_table/files/config.json`.

# How To Use
This project serves as the core of your next Telegram bot. Plugins have specific guidelines to make programming easy. To create a new plugin, make a new folder under `plugins/`, and give it a name. Next, add a `commands/` and `events/` subfolder. These folders are where you can set commands for your Telegram bot and handle events from the Telegram API when interactions occur. Check out the two example plugins I've provided! Within each plugin, you can include an `init.ts` file with an `init()` function that automatically starts loops, for instance, during bot launches.

# Register Commands with BotFather
Return to your conversation with BotFather and use the `/setcommands` command for these two example plugins!
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
These example plugins do not utilize Scenes and WizardScene. I believe they add unnecessary complexity, but I could be mistaken. Feel free to integrate them; I'm open to pull requests!

Similar to [WhatThePhoqueBOT](https://github.com/LotharieSlayer/wtpbot), another bot using this plugin system, but for Discord, I might consider integrating MongoDB. However, at the moment, I think it might be overkill.

# Libraries
- [Telegraf](https://github.com/telegraf/telegraf)
- [Enmap](https://github.com/eslachance/enmap)

# License (CC BY-NC-ND 4.0)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.
