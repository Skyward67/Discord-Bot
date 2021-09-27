const discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const fs = require('fs');


module.exports.run = async (bot, message, args) => {

    var embed = new MessageEmbed()
        .setTitle("Commands list :");
    var stringhelp = "**Command prefix :** ! \n \n";
    const map = bot.commands.keys();
    
    for (iterator of map) {
        if (iterator != "help") {
            stringhelp += "**" + iterator + " :** " + bot.commands.get(iterator).help.desc + "\n";
        }
    }
    embed.setDescription(stringhelp); 
    message.channel.send(embed);
}


module.exports.help = {
    name: "help"
}
