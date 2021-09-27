// Commande obtention de mmr League of Legends
const discord = require('discord.js');
const fs = require('fs');
const { Client, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {

    //Getting user list
    const playerlistjson = fs.readFileSync(`./data/userdata.JSON`);
    const playerlistjsonparse = JSON.parse(playerlistjson);

    const target = message.mentions.users.first() || message.author;

    if (args.length > 0) {
        var url = "https://euw.whatismymmr.com/api/v1/summoner?name=" + args;

        var data = await fetch(url).then(response => response.json());

        var embed = new MessageEmbed()
            .setTitle("MMR League of Legends de " + args);
        if (data.ranked.avg) {
            embed.addField("Ranked :", data.ranked.avg);
        }
        if (data.normal.avg) {
            embed.addField("Normal :", data.normal.avg);
        }
        if (data.ARAM.avg) {
            embed.addField("Aram :", data.ARAM.avg);
        }
            
            

        message.channel.send(embed);
    } else {
        if (playerlistjsonparse.users[target.id].PseudoLol == "null") {
            message.channel.send("Aucun pseudo League of Legend n'est enregistré pour cette utilisateur")
        } else {
            var url = "https://euw.whatismymmr.com/api/v1/summoner?name=" + playerlistjsonparse.users[target.id].PseudoLol;

            var data = await fetch(url).then(response => response.json());

            var embed = new MessageEmbed()
                .setTitle("MMR League of Legends de " + playerlistjsonparse.users[target.id].PseudoLol + " / " + target.username);
            if (data.ranked.avg) {
                embed.addField("Ranked :", data.ranked.avg);
            }
            if (data.normal.avg) {
                embed.addField("Normale :", data.normal.avg);
            }
            if (data.ARAM.avg) {
                embed.addField("Aram :", data.ARAM.avg);
            }

            message.channel.send(embed);
        }
    }
}

module.exports.help = {
    name: "mmr",
    desc: "Get your League of Legends MMR"
}