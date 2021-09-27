/*
        Commande d'affichage des stats discord
            par : Skyward
*/
const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const fs = require('fs');
var moment = require('moment-timezone');
const { moveMessagePortToContext } = require('worker_threads');
moment.tz.add("Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6");

module.exports.run = async (bot, message, args) => {

    /*-----------------------------------------------------------------------------------------------------------------------------------*/
    //Variables
    /*-----------------------------------------------------------------------------------------------------------------------------------*/
    const target = message.mentions.users.first() || message.author;                                                                    //The user (Discord)
    const memberi = message.mentions.members.first() || message.member;                                                                 //The user (Guild)
    const pseudo = target.username;                                                                                                     //User's username
    const date = moment(target.createdAt).format('Do MMMM YYYY');                                                                       //Creation date of the account
    const join = moment(memberi.joinedAt).format('DD MMMM YYYY');                                                                       //Date when the user joined the Discord server
    const datefrom = moment(target.createdAt).fromNow();                                                                                //Amount of time from the creation of user's account
    const avaurl = target.avatarURL();                                                                                                  //User's avatar URL

    /*-----------------------------------------------------------------------------------------------------------------------------------*/
    //Getting and parsing user list
    /*-----------------------------------------------------------------------------------------------------------------------------------*/
    const playerlistjson = fs.readFileSync(`./data/userdata.JSON`);                                                                     //Raw data
    const playerlistjsonparse = JSON.parse(playerlistjson);                                                                             //Parsed data

    /*-----------------------------------------------------------------------------------------------------------------------------------*/
    //add supp
    /*-----------------------------------------------------------------------------------------------------------------------------------*/
    if (memberi.presence.activities[0]) {
        var activite = memberi.presence.activities[0].name;                                                                             //Getting user's activity
        var act = moment.tz(memberi.presence.activities[0].createdTimestamp, "Europe/Paris");                                           //Getting when he started his acivity
    }

    const statusl = {                                                                                                                   //Discord's statuts enum
        online: "*:green_circle: En ligne*",
        idle: "*:orange_circle: Inactif*",
        dnd: "*:red_circle: Ne pas deranger*",
        offline: "*:black_circle: Hors-ligne*"
    }

    /*-----------------------------------------------------------------------------------------------------------------------------------*/
    //Creating the embed
    /*-----------------------------------------------------------------------------------------------------------------------------------*/
    let inline = true;                                                                                                                  //Putting inline as a true value (better code)
    const embed = new MessageEmbed()
        .setTitle(`Stats de ${pseudo}`)                                                                                                 //Title
        .setColor(0xab4f60)                                                                                                             //Color (side of the message)
        .setThumbnail(target.displayAvatarURL())                                                                                        //Thumbnail of the embed
        .addField('**:rosette: Account created the :** ', date + ' (' + datefrom + ')', inline)                                         //Creation date of the account
        .addField('**:tada: Joined the server the :**', join, inline, true)                                                             //Date when the user joined the Discord server
        .addField('**:grey_question: Statut :** ', `${statusl[memberi.presence.status]}`, true)                                         //Discord statut of the user
        .addField(`Pseudo LoL : `, playerlistjsonparse.users[target.id].PseudoLol, inline)                                              //Pseudo LoL in the "database"
        .addField(`Pseudo Steam : `, playerlistjsonparse.users[target.id].PseudoSteam, inline);                                         //Pseudo Steam in the "database"
    if (memberi.presence.activities[0]) {
        embed.addField(`Activity :`, `${activite}, depuis ${act.format("H:mm")} le ${act.format("DD/MM/YYYY")}`);                       //Activity of the user
    }
        embed.addField("**Avatar link : **", avaurl);                                                                                   //Discord's avatar URL of the user

    /*-----------------------------------------------------------------------------------------------------------------------------------*/
    //Sending the embed
    /*-----------------------------------------------------------------------------------------------------------------------------------*/
    message.channel.send(embed);

}

module.exports.help = {
    name: "stats",
    desc: "Get your Discord's stats"
}
