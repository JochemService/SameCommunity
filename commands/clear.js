const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {
        message.delete(); 

    if (!message.member.roles.some) return message.reply("Je hebt geen toesteming");

    if (!arguments[0]) return message.channel.send("Geef een aantal op");

    if (Number.isInteger(parseInt(arguments[0]))) {

        var amount = parseInt(arguments[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            message.channel.send(`Ik heb ${arguments[0]} berichten verwijderd.`).then(msg => msg.delete(3000));

        });


    } else {
        return message.channel.send("Geef een getal op");
    }

}

module.exports.help = {
    name: "clear"
}