const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {
    message.delete(); 

return message.channel.send("hallo");

}

module.exports.help = {
    name: "hallo"
}