const discord = require("discord.js");
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, arguments) => {
    message.delete();

    try {

        var prefix = botconfig.prefix;

        if(message.member.roles.some) {

            var text = `**GeoHost bot** \n\n **__Admin Commands__** \n ${prefix}ban - Ban een bepaald persoon\n ${prefix}kick - kick een bepaald persoon\n ${prefix}hallo - krijg een bericht terug\n ${prefix}ticket - maak een ticket aan\n ${prefix}sluit - delete de ticket`;

            message.author.send(text);
    
            message.channel.send("Al de commands kan je vinden in privè. :}");

        } else {

            var text = `**GeoRolplay Bot** \n\n **__Commands__** \n ${prefix}hallo - krijg een bericht terug\n ${prefix}level - zie je level (onderhoud) \n ${prefix}ticket - maak een ticket aan \n ${prefix}sluit - delete de ticket`;

            message.author.send(text);
    
            message.channel.send("Al de commands kan je vinden in privè. :}");
        }


    } catch (error) {
        message.channel.send("Er is iets fout gegaan")
    }

}


module.exports.help = {
    name: "help"
}