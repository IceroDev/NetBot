exports.run = (client, message, args) => {
  var Discord = require("discord.js");
  const { MessageEmbed } = require("discord.js");

  const embed = new MessageEmbed()
    .setTitle("Page d'aide sur le NetBot")
    .setDescription(
      "Commandes NetBot : [cliquez ici](https://netbot.icero.xyz/commandes-utilisateurs/utiliser-les-commandes-simples-de-netbot)\n" +
        "Commandes NetPanel : ``p!help``"
    )
    .addField(
      "<:github:794219026074173440> NetBot est open-source !",
      "• [Vers le repository](https://github.com/IceroDev/NetBot)\n• [Vers le signalement de problèmes](https://github.com/IceroDev/NetBot/issues)\n• [Vers les pull request](https://github.com/IceroDev/NetBot/pulls)"
    )
    .setThumbnail(client.user.avatarURL({ dynamic: true, size: 512, format: "png" }))
    .setColor("2f3136");
  message.channel.send(embed);
  setTimeout(function () {
    message.delete();
  }, 1000);
};
