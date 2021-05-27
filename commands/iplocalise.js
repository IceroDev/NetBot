exports.run = async (client, message, args) => {
  var Discord = require("discord.js");
  if (!args[0])
    return message.reply("vous ne m'avez donné aucun domaine ou ip.");
  const bent = require("bent");
  const getJSON = bent("json");
  let obj = await getJSON("http://ip-api.com/json/" + args[0]);
  if (obj.status == "fail")
    return message.reply("ce domaine ou ip n'existe pas.");
  var embed = new Discord.MessageEmbed()
    .setTitle("Informations pour " + args[0])
    .setThumbnail(
      "https://images.netheberg.fr/i/CWQ3SJzhtA6jLyUluDRpceBYXn7H25s4Ivf8mbP1Mdwrig9ZNoEFxTqkGVKO.png"
    )
    .setFooter("netheberg.fr");
  if(obj.hosting ==false){
    if(message.channel.type !=="dm"){
    message.delete()
    message.channel.send("Cette adresse IP est une adresse privée ! Vous ne pouvez pas demander des informations sur cette adresse en public. Demandez moi en message privé.")
    return;
    }
  }
  if (obj.query == "144.91.111.136") {
    embed.setDescription(
      "• **Appartient à : **" +
        "NetHeberg" +
        "\n• **FAI : ** " +
        obj.isp +
        "\n• **AS : ** " +
        obj.as +
        "\n• **IP : ** " +
        obj.query +
        "\n• **Localisation :**\n__Ville__ : " +
        obj.city +
        " (" +
        obj.zip +
        ")\n__Pays__ : " +
        obj.country
    );
    embed
      .addField(
        "Ce site est hébergé chez NetHeberg",
        "Infrastructure : `PleskPar`"
      )
      .setColor("#077B00");
  } else if (obj.query == "62.171.189.22") {
    embed.setDescription(
      "• **Appartient à : **" +
        "NetHeberg" +
        "\n• **FAI : ** " +
        obj.isp +
        "\n• **AS : ** " +
        obj.as +
        "\n• **IP : ** " +
        obj.query +
        "\n• **Localisation :**\n__Ville__ : " +
        obj.city +
        " (" +
        obj.zip +
        ")\n__Pays__ : " +
        obj.country
    );
    embed
      .addField(
        "Ce site est hébergé chez NetHeberg",
        "Infrastructure : `CPanelPar`"
      )
      .setColor("#077B00");
  } else if (obj.query == "62.171.164.160") {
    embed.setDescription(
      "• **Appartient à : **" +
        "NetHeberg" +
        "\n• **FAI : ** " +
        obj.isp +
        "\n• **AS : ** " +
        obj.as +
        "\n• **IP : ** " +
        obj.query +
        "\n• **Localisation :**\n__Ville__ : " +
        obj.city +
        " (" +
        obj.zip +
        ")\n__Pays__ : " +
        obj.country
    );
    embed
      .addField(
        "Ce site est hébergé chez NetHeberg",
        "Infrastructure : `PleskRev`"
      )
      .setColor("#077B00");
  } else if (obj.query == "45.140.164.3") {
    embed.setDescription(
      "• **Appartient à : **" +
        "NetHeberg" +
        "\n• **FAI : ** " +
        obj.isp +
        "\n• **AS : ** " +
        obj.as +
        "\n• **IP : ** " +
        obj.query +
        "\n• **Localisation :**\n__Ville__ : " +
        obj.city +
        " (" +
        obj.zip +
        ")\n__Pays__ : " +
        obj.country
    );
    embed
      .addField(
        "Ce site est hébergé chez NetHeberg",
        "Infrastructure : `RasHeberg`"
      )
      .setColor("#077B00");
  } else if (obj.query == "45.140.165.128") {
    embed.setDescription(
      "• **Appartient à : **" +
        "NetHeberg" +
        "\n• **FAI : ** " +
        obj.isp +
        "\n• **AS : ** " +
        obj.as +
        "\n• **IP : ** " +
        obj.query +
        "\n• **Localisation :**\n__Ville__ : " +
        obj.city +
        " (" +
        obj.zip +
        ")\n__Pays__ : " +
        obj.country
    );
    embed
      .addField(
        "Ce site est hébergé chez NetHeberg",
        "Infrastructure : `Ptero`"
      )
      .setColor("#077B00");
  } else if (obj.query == "185.216.25.90") {
    embed.setDescription(
      "• **Appartient à : **" +
        "NetHeberg" +
        "\n• **FAI : ** " +
        obj.isp +
        "\n• **AS : ** " +
        obj.as +
        "\n• **IP : ** " +
        obj.query +
        "\n• **Localisation :**\n__Ville__ : " +
        obj.city +
        " (" +
        obj.zip +
        ")\n__Pays__ : " +
        obj.country
    );
    embed
      .addField(
        "Ce site est hébergé chez NetHeberg",
        "Infrastructure : `PleskPro`"
      )
      .setColor("#077B00");
  } else if (obj.org == "Cloudflare, Inc.") {
    embed.setDescription(
      "• **Appartient à : **" +
        obj.org +
        "\n• **FAI : ** " +
        obj.isp +
        "\n• **AS : ** " +
        obj.as +
        "\n• **IP : ** " +
        obj.query +
        "\n• **Localisation :**\n__Ville__ : " +
        obj.city +
        " (" +
        obj.zip +
        ")\n__Pays__ : " +
        obj.country
    );
    embed
      .addField(
        "Impossible de savoir où ce site est hébergé",
        "Site passant par cloudflare"
      )
      .setColor("#faae40");
  } else if (obj.org == "CloudFlare, Inc.") {
    embed.setDescription(
      "• **Appartient à : **" +
        obj.org +
        "\n• **FAI : ** " +
        obj.isp +
        "\n• **AS : ** " +
        obj.as +
        "\n• **IP : ** " +
        obj.query +
        "\n• **Localisation :**\n__Ville__ : " +
        obj.city +
        " (" +
        obj.zip +
        ")\n__Pays__ : " +
        obj.country
    );
    embed
      .addField(
        "Impossible de savoir où ce site est hébergé",
        "Site passant par cloudflare"
      )
      .setColor("#faae40");
  } else {
    embed.setDescription(
      "• **Appartient à : **" +
        obj.org +
        "\n• **FAI : ** " +
        obj.isp +
        "\n• **AS : ** " +
        obj.as +
        "\n• **IP : ** " +
        obj.query +
        "\n• **Localisation :**\n__Ville__ : " +
        obj.city +
        " (" +
        obj.zip +
        ")\n__Pays__ : " +
        obj.country
    );
    embed
      .addField(
        "Site web n'étant pas hébergé chez NetHeberg",
        "Vous êtes le créateur de ce site ? Passez à l'hébergement gratuit [ici](https://netheberg.fr/) !"
      )
      .setColor("2f3136");
  }
  message.channel.send(embed);
};
