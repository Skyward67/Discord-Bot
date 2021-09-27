const discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const querystring = require('querystring');

module.exports.run = async (bot, message, args) => {

    const query = querystring.stringify({ '': args.join(' ') }, '%20');

    const url = 'https://kitsu.io/api/edge/anime?filter[text]' + query;
    console.log(url);


    const { data } = await fetch(url).then(response => response.json());
    

    data.length ? animfind() : message.channel.send("Can't find this anime, try with another name");

    function animfind() {

        if (data[0].attributes.coverImage === null) {

            const titre = data[0].attributes.titles.en || data[0].attributes.titles.en_jp
            let inline = true;
            const embed = new MessageEmbed()
                .setTitle(titre)
                .setThumbnail(data[0].attributes.posterImage.original)
                .addField("Date de sortie :", data[0].attributes.startDate, inline)
                .addField("Status", data[0].attributes.status, inline)
                .setDescription("**Synopsis :** *" + data[0].attributes.synopsis + "*");

            var otheranim = [];

            for (let i = 1; i < data.length; i++) {
                otheranim[i - 1] = data[i].attributes.titles.en_jp;
            }

            const embedotheranim = new MessageEmbed()
                .setTitle("Were you looking for :")
                .setDescription(otheranim);

            message.channel.send(embed);
            message.channel.send(embedotheranim);

        } else {

            const titre = data[0].attributes.titles.en || data[0].attributes.titles.en_jp
            let inline = true;
            const embed = new MessageEmbed()
                .setTitle(titre)
                .addField("Date de sortie :", data[0].attributes.startDate, inline)
                .addField("Status", data[0].attributes.status, inline)
                .setImage(data[0].attributes.coverImage.large)
                .setDescription("**Synopsis :** *" + data[0].attributes.synopsis + "*");

            var otheranim = [];

            for (let i = 1; i < data.length; i++) {
                otheranim[i - 1] = data[i].attributes.titles.en_jp;
            }

            const embedotheranim = new MessageEmbed()
                .setTitle("Were you looking for :")
                .setDescription(otheranim);


            message.channel.send(embed);
            message.channel.send(embedotheranim);

        }
    }

}

module.exports.help = {
    name: "anime",
    desc: "Research anime"
}