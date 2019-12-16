const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //  sps steen papier schaar

    if (!args[0]) return message.channel.send("Gebruik: -sps <steen, papier en schaar>");

    var options = ["steen", "papier", "schaar"];

    var result = options[Math.floor(Math.random() * options.length)];

    if (args[0] == "steen") {

        if (result == "papier") {

            message.channel.send(`ik heb ${result}: :newspaper:, ik win! GG!`);

        } else if (result == "schaar") {
            message.channel.send(`ik heb ${result}: :scissors:, jij wint! GG!`);
        } else if (result == "steen") {
            message.channel.send(`ik heb ${result}: :moyai:, niemand wint!`);
        }

    }
    else if (args[0] == "papier") {

        if (result == "steen") {

            message.channel.send(`ik heb ${result}: :moyai:, jij wint! GG!`);

        } else if (result == "schaar") {
            message.channel.send(`ik heb ${result}: :scissors:, ik win! GG!`);
        } else if (result == "papier") {
            message.channel.send(`ik heb ${result}: :newspaper:, niemand wint!`);
        }

    }
    else if (args[0] == "schaar") {

        if (result == "steen") {

            message.channel.send(`ik heb ${result}: :moyai:, ik win! GG!`);

        } else if (result == "papier") {
            message.channel.send(`ik heb ${result}: :newspaper:, jij wint! GG!`);
        } else if (result == "schaar") {
            message.channel.send(`ik heb ${result}: :scissors:, niemand wint!`);
        }

    }


}

module.exports.help = {
    name: "sps"
}