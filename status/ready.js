module.exports = async (client) => {
  const Discord = require("discord.js");
  console.log("Status démarrés");
  const hello = client.channels.cache.get("743023394458566686");
  const ping = require("ping");
  let helloembed = new Discord.MessageEmbed()
    .setTitle("LOG DEV")
    .setColor("GREEN")
    .addField("Status Inst 2", "Démarrage effectué avec succès");
  hello.send(helloembed);
  const temps = 60000;
  const Hping = 300;
  const VHping = 900;
  const errorColor = "0xff0000";
  const okColor = "#05d848";
  const axios = require("axios");

  client.channels.cache
    .get("743146051078193182")
    .messages.fetch("752250136033231030")
    .then((m) => {
      setInterval(async () => {
        var embed = new Discord.MessageEmbed()
          .setTitle("Statuts des serveurs")
          .setDescription(
            "Les statuts sur cette page sont actualisés toutes les 60 secondes[.](https://net-bot.tk/easter-egg.mp4) Une version web est disponible [ici](https://status.netheberg.fr/)"
          )
          .setColor("2f3136")
          .setThumbnail(
            client.guilds.cache
              .get("663370560696221698")
              .iconURL({ dynamic: true, size: 512, format: "png" })
          )
          .setFooter("Dernière actualisation des données ")
          .setTimestamp();
        
        let error;
        let siteV = await axios.get("https://api2.netheberg.fr/api/host/netheberg.fr")
        let manager = await axios.get("https://api2.netheberg.fr/api/host/manager.netheberg.fr")
        let plesk1 = await axios.get("https://api2.netheberg.fr/api/host/monplesk.eu")
        let plesk2 = await axios.get("https://api2.netheberg.fr/api/host/web01.holycloud.fr")
        let vps1 = await axios.get("https://api2.netheberg.fr/api/host/193.70.77.111")
        let panel = await axios.get("https://api2.netheberg.fr/api/host/panel.netheberg.fr")
        let cpanel1 = await axios.get("https://api2.netheberg.fr/api/host/monpanel.info")
            try {
        if (siteV.data.pingInfo.avg > VHping) {
          var site =
            ":chart_with_downwards_trend: | Site Web (" +
            siteV.data.pingInfo.avg +
            "ms)";
        }
        if (siteV.data.pingInfo.avg > Hping) {
          var site =
            ":chart_with_downwards_trend: | Site Web (" +
            siteV.data.pingInfo.avg +
            "ms)";
        }
        if (siteV.data.statusInfo.sitewebAccessible) {
          var site =
            ":white_check_mark: | Site Web (" +
            siteV.data.pingInfo.avg +
            "ms) [[Visiter le site]](https://netheberg.fr)";
        }
        if (siteV.data.statusInfo.sitewebAccessible == false) {
          var site = ":x: | Site Web";
        }

        if (manager.data.pingInfo.avg > VHping) {
          var ma =
            ":chart_with_downwards_trend: | Espace Client (" +
            manager.data.pingInfo.avg +
            "ms)";
        }
        if (manager.data.pingInfo.avg > Hping) {
          var ma =
            ":chart_with_downwards_trend: | Espace Client (" +
            manager.data.pingInfo.avg +
            "ms)";
        }
        if (managersiteV.data.statusInfo.sitewebAccessible) {
          var ma =
            ":white_check_mark: | Espace Client (" +
            manager.data.pingInfo.avg +
            "ms) [[Visiter le site]](https://manager.netheberg.fr)";
        }
        if (manager.data.statusInfo.sitewebAccessible == false) {
          var ma = ":x: | Espace Client";
        }

        if (plesk1.data.pingInfo.avg > VHping) {
          var p1 =
            ":chart_with_downwards_trend: | Plesk (particulier) (" +
            plesk1.data.pingInfo.avg +
            "ms)";
        }
        if (plesk1.data.pingInfo.avg > Hping) {
          var p1 =
            ":chart_with_downwards_trend: | Plesk (particulier) (" +
            plesk1.data.pingInfo.avg +
            "ms)";
        }
        if (plesk1siteV.data.statusInfo.sitewebAccessible) {
          var p1 =
            ":white_check_mark: | Plesk (particulier) (" +
            plesk1.data.pingInfo.avg +
            "ms) [[Vers le panel]](https://monplesk.eu)";
        }
        if (plesk1.data.statusInfo.sitewebAccessible == false) {
          var p1 = ":x: | Plesk (particulier)";
        }

        if (plesk2.data.pingInfo.avg > VHping) {
          var p2 =
            ":chart_with_downwards_trend: | Plesk (professionnel) (" +
            plesk2.data.pingInfo.avg +
            "ms)";
        }
        if (plesk2.data.pingInfo.avg > Hping) {
          var p2 =
            ":chart_with_downwards_trend: | Plesk (professionnel) (" +
            plesk2.data.pingInfo.avg +
            "ms)";
        }
        if (plesk2siteV.data.statusInfo.sitewebAccessible) {
          var p2 =
            ":white_check_mark: | Plesk (professionnel) (" +
            plesk2.data.pingInfo.avg +
            "ms) [[Vers le panel]](https://web01.holycloud.fr:8443)";
        }
        if (plesk2.data.statusInfo.sitewebAccessible == false) {
          var p2 = ":x: | Plesk (professionnel)";
        }

        if (vps1.data.pingInfo.avg > VHping) {
          var v1 =
            ":chart_with_downwards_trend: | Serveur (" +
            vps1.data.pingInfo.avg +
            "ms)";
        }
        if (vps1.data.pingInfo.avg > Hping) {
          var v1 =
            ":chart_with_downwards_trend: | Serveur (" +
            vps1.data.pingInfo.avg +
            "ms)";
        }
        if (vps1siteV.data.statusInfo.sitewebAccessible) {
          var v1 =
            ":white_check_mark: | Serveur (" +
            vps1.data.pingInfo.avg +
            "ms)";
        }
        if (vps1.data.statusInfo.sitewebAccessible == false) {
          var v1 = ":x: | Serveur";
        }

        if (panel.data.pingInfo.avg > VHping) {
          var pa =
            ":chart_with_downwards_trend: | Panel (" +
            panel.data.pingInfo.avg +
            "ms)";
        }
        if (panel.data.pingInfo.avg > Hping) {
          var pa =
            ":chart_with_downwards_trend: | Panel (" +
            panel.data.pingInfo.avg +
            "ms)";
        }
        if (panelsiteV.data.statusInfo.sitewebAccessible) {
          var pa =
            ":white_check_mark: | Panel (" +
            panel.data.pingInfo.avg +
            "ms) [[Visiter le site]](https://panel.netheberg.fr)";
        }
        if (panel.data.statusInfo.sitewebAccessible == false) {
          var pa = ":x: | Panel";
        }

        if (cpanel1.data.pingInfo.avg > VHping) {
          var cp1 =
            ":chart_with_downwards_trend: | CPanel (particulier) (" +
            cpanel1.data.pingInfo.avg +
            "ms)";
        }
        if (cpanel1.data.pingInfo.avg > Hping) {
          var cp1 =
            ":chart_with_downwards_trend: | CPanel (particulier) (" +
            cpanel1.data.pingInfo.avg +
            "ms)";
        }
        if (cpanel1siteV.data.statusInfo.sitewebAccessible) {
          var cp1 =
            ":white_check_mark: | CPanel (particulier) (" +
            cpanel1.data.pingInfo.avg +
            "ms) [[Vers le panel]](https://monpanel.info:2083)";
        }
        if (cpanel1.data.statusInfo.sitewebAccessible == false) {
          var cp1 = ":x: | CPanel (particulier)";
        }
        embed.addField("\u200b", "\u200b");
        embed.addField(
          "<:NetHeberg:742431416104779827> NetHeberg",
          site + "\n" + ma
        );
        embed.addField("\u200b", "\u200b");
        embed.addField("🌐 Univers Web", p1 + "\n" + p2 + "\n" + cp1);
        embed.addField("\u200b", "\u200b");
        embed.addField("🎮 Univers Game", v1 + "\n" + pa);
        m.edit(embed);
    } catch (error) {
            console.log(error);
            if (error) {
              var embedE = new Discord.MessageEmbed()
                .setTitle("Statuts des serveurs")
                .setDescription(
                  "Erreur avec la récupération des serveurs, nous travaillons actuellement sur ce problème.\n\nNous nous excusons pour la gène occasionnée."
                )
                .setColor("RED")
                .setThumbnail(
                  client.guilds.cache
                    .get("663370560696221698")
                    .iconURL({ dynamic: true, size: 512, format: "png" })
                );
              m.edit(embedE);
            }
          };
      }, temps);
    });
};
