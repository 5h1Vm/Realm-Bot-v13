import DiscordJS, { Intents, Message } from 'discord.js'
import dotenv from 'dotenv'

console.clear();

// const keepAlive = require("./server")

dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log(`The code is running in ||${client.user?.tag}||`)
})

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: 'kya be',
        })
    }
})

// keepAlive()
client.login(process.env.TOKEN)