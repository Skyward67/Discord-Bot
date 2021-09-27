// Commande de définition du pseudo LoL
const discord = require('discord.js');
const fs = require('fs');
const { Client, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {

    //Getting user list
    const playerlistjson = fs.readFileSync(`./data/userdata.JSON`);
    const playerlistjsonparse = JSON.parse(playerlistjson);

    if (args.length < 2 && args[0].length < 32 && args[0].length > 2) {

        playerlistjsonparse.users[message.author.id].PseudoSteam = args[0];
        

    }
    console.log(playerlistjsonparse.users[message.author.id].PseudoSteam);
    fs.writeFile('./data/userdata.JSON', JSON.stringify(playerlistjsonparse), err => {
        if (err) console.log("error");
    })

}

module.exports.help = {
    name: "setsteam",
    desc: "Set your Steam username (*for !stats*)"
}
