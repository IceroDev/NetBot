exports.run = (client, message, args) => {
  var Discord = require("discord.js");
    //Google Search command
    message.delete()
    let msg = message.content.slice(8);
    let modif = msg.replace(/\s/g, '+')
    let url = "https://google.com/search?q=" + modif
    
    const embed = new Discord.MessageEmbed()
    .setTitle("Recherche Google")
    .setDescription(`Voici votre lien [lien!](${url})`)
    message.reply(embed)
};
