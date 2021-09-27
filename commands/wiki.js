// Commande de recherche wikipédia
const discord = require('discord.js');
const fs = require('fs');
const { Client, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {

    var link = "https://fr.wikipedia.org/wiki/";
    args.forEach((item, index) => {
        if (index > 0) {
            link = link + "_" + item;
        } else {
            link = link + item;
        }
        
    });
    message.channel.send(link);
}

module.exports.help = {
    name: "wiki",
    desc: "Need some info? (*usage: !wiki + research*)"
}
