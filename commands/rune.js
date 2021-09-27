/*
        Commande pour obtenir les rune op.gg
            par : Skyward
*/

const discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {

    let summoner = args;
    const url = "https://www.op.gg/champion/" + args[0] + "/statistics/" + args[1];
    const champ = "http://ddragon.leagueoflegends.com/cdn/10.10.3208608/data/en_US/champion.json";


    const roles = {
        top: "top",
        jungle: "jungle",
        mid: "mid",
        support: "support",
        bot: "bot"
    }

    roles[args[1]] ? runesend() : message.channel.send("Les roles possibles sont: top, jungle, mid, support, bot");

    function runesend() {
        var embed = new MessageEmbed()
            .setTitle(`Runes op.gg pour ` + args[0] + " au " + args[1])
            .setDescription("Lien : " + url);

        message.channel.send(embed);

    }

}

module.exports.help = {
    name: "rune",
    desc: "Get rune (*usage : champ  + role*)"
}