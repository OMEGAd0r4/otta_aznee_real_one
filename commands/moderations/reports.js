const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = "/";
const bot = new commando.Client({
  commandPrefix: prefix
});
const ms = require("ms");

class reportCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'report', 
      group: 'moderations',
      memberName: 'report',
      description: 'Sends a report message for a reported user'
    });
  }

  async run(message, args)
  {
    var rargs = message.content.slice(prefix.length).split(/ + /); 
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(rargs[0]));
        let rreason = rargs.join(" ").slice(22);
        if (!rUser) return message.channel.send({embed: new Discord.RichEmbed()
          .setDescription(":x: **Missing args**")
          .setColor("#FF4040")
          .addField("->", "/report [User] [Reason]")});
        if (!rreason) return message.channel.send({embed: new Discord.RichEmbed()
          .setDescription(":x: **Missing args**")
          .setColor("#FF4040")
          .addField("->", "/report [User] [Reason]")});
          
            var reportsembed = new Discord.RichEmbed()
            .setDescription("✅**Report**")
            .setColor("#2AC940")
            .addField("Reported User", `${rUser} with the ID: ${rUser.id}`)
            .addField("Reported By", `${message.author} with the ID: ${message.author.id}`)
            .addField("Reported Reason", `${rreason}`)
            .addField("Channel Location", message.channel)
            .addField("Reported Time", message.createdAt)

            let logschannel = message.guild.channels.find(`name`, "logs");
            if(!logschannel) return message.channel.send("Couldn't find the logs channel");

            message.delete();
            logschannel.send(reportsembed);

        message.reply('Thanks for your report. We will contact you within 24h')
  }
}

module.exports = reportCommand

