const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const active = new Map();

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);
    
    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen :}`)

        bot.commands.set(fileGet.help.name, fileGet);

    })

});



bot.on("guildMemberAdd", member => {

    var role = member.guild.roles.find("name", "Member");

    if (!role) return;

    member.addRole(role);

    const channel = member.guild.channels.find("name", "📥welkom");

    if(!channel) return;

    channel.send(`Hey ${member}, welkom **SameCommunity**. Voor vragen maak een ticket aan. Voor rank aanvraag maak ticket aan! en voor de rest maak veel plezier:tada::hugging:!`);

});


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`)

    bot.user.setActivity("uw vragen!", {type: "LISTENING"});
});
bot.on('message', message => {
 
    if(message.content.toLowerCase() === 'hallo')
        message.channel.send("Hallo " + message.author + "!");

});

bot.on('message', message => {
 
    if(message.content.toLowerCase() === 'help')
        message.channel.send("**GeoHost Bot** \n\n **__Messages__** \nhallo - krijg een bericht terug \nwebsite - krijg de link naar de website");

});

bot.on('message', message => {
    if (message.channel.id === "583629739613487104") {

         message.react("👍");
         message.react("👎");
     }

});

// chat bot

bot.on("message", async message => {

    // Als bot bericht stuurt stuur dan return
    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;
    
    var messageArray = message.content.split(" ");

	var command = messageArray[0].toLowerCase();

    var arguments = messageArray.slice(1);


if (!commands) {

    var swearWords = JSON.parse(fs.readFileSync("./data/swearWords.json"));
    
    var sentenceUser = "";
    
    var amountSwearWords = 0;

    for (var y = 0; y < messageArray.length; y++) {

        var changeWord = "";

        for (var i = 0; i < swearWords["vloekWoorden"].length; i++) {

            var word = messageArray[y].toLowerCase();

            if (word == swearWords["vloekWoorden"][i]) {

                changeWord = word.replace(swearWords["vloekWoorden"][i], "(piep)");

                sentenceUser = sentenceUser + " " + changeWord;

                amountSwearWords++;

            }

        }

        if (!changeWord) {

            sentenceUser = sentenceUser + " " + messageArray[y];

        }

    }

    if (amountSwearWords != 0) {

        message.delete();
        message.channel.send(sentenceUser);
        message.channel.send(message.author + " Niet vloeken A.U.B");

    }

}

    var commands = bot.commands.get(command.slice(prefix.length));

    if (!message.content.startsWith(prefix)) return;
    
    var options = {
        
        active: active
        
    }

    if (commands) commands.run(bot, message, arguments, options)
    
    
// Nakijken als het geen command is.

});
bot.login(process.env.token);