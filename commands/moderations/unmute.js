const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = "/";
const bot = new commando.Client({
  commandPrefix: prefix
});
const ms = require("ms");

class unmuteCommand extends commando.Command {
    constructor(client) 
    {
      super(client, {
        name: 'unmute', 
        group: 'moderations',
        memberName: 'unmute',
        description: "Unmutes a muted user"
      });
    }

    async run(message, args)
    {
        var unmuteargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
        var unmuteuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(unmuteargs[0]));
        var unmuterole = message.guild.roles.find(`name`, "Temp-Muted");

        if (!unmuterole) return message.channel.send("Please make a 'Temp-Muted' role to proceed")

        if (!unmuteuser) return message.channel.send({embed: new Discord.RichEmbed()
            .setDescription(":x: **Missing args**")
            .setColor("#FF4040")
            .addField("->", "/unmute [User]")});

        if (!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("Insufficient permission. You do not have permission to unmute others")

        if (unmuteuser.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("Insufficient permission. You do not have permission to mute admins!")

        var unmuteembed = new Discord.RichEmbed()
            .setColor("#2AC940")
            .setDescription('✅**Unmuted**')
            .addField('**__Unmuted User__**', `${unmuteuser} with the ID: ${unmuteuser.id}`)
            .addField('**__Unmuted By__**', `${message.author} with the ID: ${message.author.id}`)
            .addField('**__Unmuted Location__**', message.channel)
            .addField('**__Unmuted Time__**', message.createdAt)

            let logschannel = message.guild.channels.find(`name`, "logs");
            if(!logschannel) return message.channel.send("Couldn't find the logs channel");

            message.channel.send(`${unmuteuser} has been unmuted`)
            logschannel.send(unmuteembed).then(unmuteuser.removeRole(unmuterole.id));
    }
}

module.exports = unmuteCommand;
