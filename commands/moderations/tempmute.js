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
        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!tomute) return message.reply("Couldn't find user.");
        if (!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("Insufficient permission. You do not have permission to mute others")
        if (tomute.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send("Insufficient permission. You do not have permission to mute admins!")
        let muterole = message.guild.roles.find(`name`, "Temp-Muted");
        //start of create role
        if(!muterole){
          try{
            muterole = await message.guild.createRole({
              name: "Temp-Muted",
              color: "#000000",
              permissions:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
              });
            });
          }catch(e){
            console.log(e.stack);
          }
        }
        //end of create role
        let mutetime = args[1];
        if(!mutetime) return message.channel.send({embed: new Discord.RichEmbed()
            .setDescription(":x: **Missing args**")
            .setColor("#FF4040")
            .addField("->", "/tempmute [User] [Reason]")});

        var mutereason = args [2];
        if (!mutereason) return message.channel.send({embed: new Discord.RichEmbed()
            .setDescription(":x: **Missing args**")
            .setColor("#FF4040")
            .addField("->", "/tempmute [User] [Reason]")});
      
        await(tomute.addRole(muterole.id));
        message.channel.send(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

        var muteembed = new Discord.RichEmbed()
                .setColor("#2AC940")
                .setDescription('✅**Temp-Muted**')
                .addField('**__Temp-Muted User__**', `${tomute} with the ID: ${tomute.id}`)
                .addField('**__Temp-Muted By__**', `${message.author} with the ID: ${message.author.id}`)
                .addField('**__Temp-Muted Reason__**', mutereason)
                .addField("**__Temp-Mute Duration__**", mutetime)
                .addField('**__Temp-Muted Location__**', message.channel)
                .addField('**__Temp-Muted Time__**', message.createdAt)

                let logschannel = message.guild.channels.find(`name`, "logs");
                if(!logschannel) return message.channel.send("Couldn't find the logs channel");

                logschannel.send(muteembed).then(tomute.addRole(muterole.id));

                message.delete();

                tomute.sendMessage(tomute + " Hey you have been temp-muted from the Alpha Network for the reason of " + '[' + mutereason + ']')
      
        setTimeout(function(){
          tomute.removeRole(muterole.id);
          message.channel.send(`<@${tomute.id}> has been unmuted!`);
        }, ms(mutetime));
        
    }
}

module.exports = tempmuteCommand;
