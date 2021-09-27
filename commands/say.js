const discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

    if (message.member.hasPermission('MANAGE_MESSAGES') || message.author.id == "249807601150328834") {
        message.delete();
        message.channel.send(message.content.slice(4));
    } else {
        return;
    }

}

module.exports.help = {
    name: "say",
    desc: "Make the bot say something (*require admin privilege*)"
}