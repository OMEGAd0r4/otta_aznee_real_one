const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = "/";
const bot = new commando.Client({
  commandPrefix: prefix
});
const ms = require("ms");

class tempmuteCommand extends commando.Command {
    constructor(client) 
    {
      super(client, {
        name: 'temp-mute', 
        group: 'moderations',
        memberName: 'temp-mute',
        description: "Temporarily mutes a user"
      });
    }

    async run(message, args)
    {
        var tempmuteargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
        var tempmuteuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(tempmuteargs[0]));
        var tempmutereason = tempmuteargs.join(" ").slice(22);
        var tempmuterole = message.guild.roles.find(`name`, "Temp-Muted");

        if (!tempmuterole) return message.channel.send("Please make a 'Temp-Muted' role to proceed")

        if (!tempmuteuser) return message.channel.send({embed: new Discord.RichEmbed()
            .setDescription(":x: **Missing args**")
            .setColor("#FF4040")
            .addField("->", "/tempmute [User] [Reason]")});

        if (!tempmutereason) return message.channel.send({embed: new Discord.RichEmbed()
            .setDescription(":x: **Missing args**")
            .setColor("#FF4040")
            .addField("->", "/tempmute [User] [Reason]")});

        if (!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("Insufficient permission. You do not have permission to mute others")

        if (tempmuteuser.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("Insufficient permission. You do not have permission to mute admins!")

            var tempmuteembed = new Discord.RichEmbed()
                .setColor("#2AC940")
                .setDescription('✅**Temp-Muted**')
                .addField('**__Temp-Muted User__**', `${tempmuteuser} with the ID: ${tempmuteuser.id}`)
                .addField('**__Temp-Muted By__**', `${message.author} with the ID: ${message.author.id}`)
                .addField('**__Temp-Muted Reason__**', tempmutereason)
                .addField('**__Temp-Muted Location__**', message.channel)
                .addField('**__Temp-Muted Time__**', message.createdAt)

                let logschannel = message.guild.channels.find(`name`, "logs");
                if(!logschannel) return message.channel.send("Couldn't find the logs channel");

                logschannel.send(tempmuteembed).then(tempmuteuser.addRole(tempmuterole.id));

                message.delete();

                message.channel.send(`${tempmuteuser} has been temp-muted`)

                tempmuteuser.sendMessage(tempmuteuser + " Hey you have been temp-muted from the Alpha Network for the reason of " + '[' + tempmutereason + ']')
        
    }
}

module.exports = tempmuteCommand;
