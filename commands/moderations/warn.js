const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = "/";
const bot = new commando.Client({
  commandPrefix: prefix
});
const ms = require("ms");

class warnCommand extends commando.Command{
  constructor(client) 
  {
    super(client, {
      name: 'warn', 
      group: 'moderations',
      memberName: 'warn',
      description: "Warns a user"
    });
  }
  async run (message, args)
  {
        var warnargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
        var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(warnargs[0]));
        var warnreason = warnargs.join(" ").slice(22);
        if (!warnUser) return message.channel.send({embed: new Discord.RichEmbed()
          .setDescription(":x: **Missing args**")
          .setColor("#FF4040")
          .addField("->", "/warn [User] [Reason]")});
        if (!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("Insufficient permission. You do not have permission to warn other users!")
        if (!warnreason) return message.channel.send({embed: new Discord.RichEmbed()
          .setDescription(":x: **Missing args**")
          .setColor("#FF4040")
          .addField("->", "/warn [User] [Reason]")});

        if (!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("Insufficient permission. You do not have permission to warn other users!")
        
          var warnembed = new Discord.RichEmbed()
          .setColor("#2AC940")
          .setDescription('✅**Warn**')
          .addField('**__Warned User__**', `${warnUser} with the ID: ${warnUser.id}`)
          .addField('**__Warned By__**', `${message.author} with the ID: ${message.author.id}`)
          .addField('**__Warned Reason__**', warnreason)
          .addField('**__Warned Location__**', message.channel)
          .addField('**__Warned Time__**', message.createdAt)

          let logschannel = message.guild.channels.find(`name`, "logs");
          if(!logschannel) return message.channel.send("Couldn't find the logs channel");

          logschannel.send(warnembed);

        message.channel.send(`${warnUser} has been warned`)

        warnUser.sendMessage(warnUser + " Hey you have been warned from the Alpha Network for the reason of " + '[' + warnreason + ']').catch()

        message.delete();
  }
}

module.exports = warnCommand
