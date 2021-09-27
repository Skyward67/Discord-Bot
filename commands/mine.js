const discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {



        const url = "https://api.mojang.com/users/profiles/minecraft/" + args;
        const { id } = await fetch(url).then(response => response.json());

        var url2 = "https://api.mojang.com/user/profiles/" + id + "/names"
        const a = await fetch(url2).then(response => response.json());

       
        var minename = [];

        for (let i = 0; i < a.length; i++) {
            minename[i] = a[i].name;
        }

        const embed = new MessageEmbed()
            .setTitle("Profile minecraft de " + args)
            .setThumbnail("https://crafatar.com/renders/body/" + id + "?size=5&overlay")
            .addField("Pseudo : ", minename);

        message.channel.send(embed);

    
}

module.exports.help = {
    name: "mine",
    desc: "Get your minecraft profile"
}