const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
var moment = require('moment-timezone');
moment.tz.add("Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6");


bot.commands = new Discord.Collection();
var keyjson = fs.readFileSync("./config.JSON");
var keyparse = JSON.parse(keyjson);
var key = keyparse.Discordkey;

bot.login(key);


fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("Aucune commande disponible");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} load!`);
        if (props.help && props.help.name) {
            bot.commands.set(props.help.name, props);
        } else {
            console.error(`file ${f} does not have .help or .help.name property!`);
        }
    });



    fs.readdir("./events/", (error, f) => {
        if (error) console.log(error);
        console.log(`${f.length} events loading`);

        f.forEach((f) => {
            const events = require(`./events/${f}`);
            const event = f.split(".")[0];

            bot.on(event, events.bind(null, bot));
        });
    });
});

const getApp = () => {
    const app = bot.api.applications(bot.user.id);
    return app;
}

bot.on("ready", async () => {
    console.log(bot.user.username + " ready!");
    bot.user.setActivity('Le premier qui dit lien je le fume');

    // 22/03/2021
   
    //const command = await getApp().commands.get();
    //console.log(command);

    /*await getApp().commands.post({
        data: {
            name: 'Test',
            description: 'fun',
        },
    })*/

    //await getApp().commands('823684457642590238').delete();

});


bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    let content = message.content.split(" ");
    let command = content[0];
    let args = content.slice(1);
    let prefix = ">";

    let commandfile = bot.commands.get(command.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);
})

