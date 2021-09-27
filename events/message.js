const Discord = require('discord.js');
const fs = require('fs');
var moment = require('moment-timezone');
const { Z_ASCII } = require('zlib');
const { Client, MessageEmbed } = require('discord.js');
moment.tz.add("Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6");


module.exports = (client, member, message) => {

    if (member.author.bot) return;
    if (member.content[0] == "!") return;

    var tmp = member.content.toLowerCase().split(' ');
    tmp.forEach(i => {
        let ln = i.length;
        for (var n = 0; n < ln; n++) {
            if (i[n] == 'l' && n < ln-3) {
                n++;
                if (i[n] == 'i' && n < ln - 2) {
                    n++
                    if (i[n] == 'e' && n < ln - 1) {
                        n++
                        if (i[n] == 'n') {
                            if (ln > 4) {
                                if (n == 4) {
                                    if ((i[n + 1] >= 'A' && i[n + 1] <= 'Z') || (i[n + 1] >= 'a' && i[n + 1] <= 'z')) {

                                    } else if ((i[n - 4] >= 'A' && i[n - 4] <= 'Z') || (i[n - 4] >= 'a' && i[n - 4] <= 'z')) {


                                    } else {
                                        member.channel.send("<#772851650883878942> et au passage ta gueule, et dis a Loic de la fermer parce qu'il casse les couilles");
                                    }
                                }
                                else if (n > 4) {
                                    if ((i[n - 4] >= 'A' && i[n - 4] <= 'Z') || (i[n - 4] >= 'a' && i[n - 4] <= 'z')) {

                                    } else {
                                        member.channel.send("<#772851650883878942> et au passage ta gueule, et dis a Loic de la fermer parce qu'il casse les couilles");
                                    }
                                }
                            }
                            if (ln == 4) {
                                member.channel.send("<#772851650883878942> et au passage ta gueule, et dis a Loic de la fermer parce qu'il casse les couilles");
                            }
                        }
                    }
                }
            }
        }
    }
    );

    if (member.content == "https://tenor.com/view/natoo-chien-baise-encule-enculade-gif-14913203") {
        member.delete();
        member.channel.send(`Arrete avec ton gif cursed <@${member.author.id}>`);
        const embed = new MessageEmbed()
            .setColor(0xab4f60)
            .setDescription("⣿⣿⣿⣿⠋⢩⢹⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿" + '\n' + "⣿⣿⣿⡧⣦⠄⢧⡙⢿⣟⢁⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⢿" + '\n' + "⣿⣿⣿⣷⣶⣶⣦⡈⠂⠄⠸⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠉⠰⢠⣼" + '\n' + "⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠄⢒⣂⠄⠙⢿⣿⣿⡿⠛⢛⣻⣿⣿⡟⢁⣠⣴⣶⣶" + '\n' + "⣿⣿⣿⣿⣿⣿⣿⠇⢇⡄⣆⣤⣀⣦⡄⢈⣉⣛⣭⡀⠙⠭⡛⠿⣿⣻⣿⣿⣿⣿" + '\n' + "⣿⣿⣿⣿⣿⣿⣿⠄⠄⣿⣿⣿⣿⣿⢃⣿⣿⣿⣿⣿⣶⣷⡾⣼⣿⠈⠉⠄⠄⠈" + '\n' + "⣿⣿⣿⣿⣿⣿⡇⠄⠄⢿⣿⣿⣿⣥⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠄⠄⠄⠄" + '\n' + "⣿⣿⣿⣿⡿⠋⠄⠄⠄⢸⣿⡿⠿⠄⠈⠛⢟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠄⠄⠄" + '\n' + "⣿⣿⣿⠟⠁⠄⠄⠄⠄⠄⢠⣄⣀⡲⢦⣤⣼⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠄⠄" + '\n' + "⠛⠋⠄⠄⠄⠄⠄⠄⠄⠄⠈⢿⣟⠻⠿⣿⣿⣿⣷⣾⣿⣿⣿⣿⢿⣿⣿⡇⠄⠄" + '\n' + "⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠻⣷⣶⣾⣿⣿⣿⣿⣿⣿⠟⢡⣿⣿⣿⡟⠄⠄" + '\n' + "⣦⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣉⣹⣿⣿⣿⣿⠟⠁⣰⣿⣿⣿⣿⡇⠄⠄" + '\n' + "⣿⣧⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠉⠉⠙⠛⠉⠁⢀⣼⣿⣿⣿⣿⡟⠄⠄⠄" + '\n' + "⣿⣧⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣼⣿⣿⣿⣿⡟⠄⠄⠄⠄");
            
        member.channel.send(embed);
    }

    const playerlistjson = fs.readFileSync(`./data/userdata.JSON`);
    const playerlistjsonparse = JSON.parse(playerlistjson);
    
    if (playerlistjsonparse.users[member.author.id]) {
        
    } else {
        let dataf = member.author.id;
        var file = playerlistjsonparse.users;
        file[dataf] = {
            PseudoLol: "null",
            PseudoSteam: "null"
        };
        console.log(member.author);
        fs.writeFile('./data/userdata.JSON', JSON.stringify(playerlistjsonparse), err => {
            if (err) console.log("error");
        })
    }
    
}
