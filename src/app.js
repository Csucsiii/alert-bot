const { Client } = require("discord.js-selfbot");
const config = require("./config/config.json");
const Logger = require("./utils/log");
const client = new Client();

client.once("ready", () => {
    Logger.info("Logged in");
})

client.on("message", async(message) => {
    if (config.channels.includes(message.channel.id)){
        await client.users.cache.get(config.alert.id).send(`**ALERT** \n\nSERVER: **${message.guild.name}** \nCHANNEL: **<#${message.channel.id}>**\nMESSAGE: **${message.content}** \nFROM: **${message.author.tag}**`).catch((err) => Logger.error(err));
    }
})

client.login(process.env.TOKEN);

