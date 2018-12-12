const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = "/";
const bot = new commando.Client({
    commandPrefix: prefix
});

class msgCommand extends commando.Command {

    constructor(client)
    {
      super(client, {
        name: 'msg',
        group: 'fun',
        memberName: 'msg',
        description: 'directly messages a user through the server'
      });
    }

    async run(message, args)
    {
        var msguser = message.guild.member(message.mentions.users.first()) 
        var msgmessage = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
        var msgmessage2 = msgmessage.join(" ").slice(22);
        if (!msgmessage2) return message.channel.send("Please enter a message you want to send to that person!")
        if(!msguser) return message.channel.send("There seems to be a missing argument. Please specifty the user you are trying to directly message!")
        if(!msgmessage) return message.channel.send("There seems to be a missing argument here. Please specify a valid user!")

        message.delete(-1);
        msguser.sendMessage(message.author + " has sent a message to you: " + msgmessage2)
    }
}

module.exports = msgCommand


//!msg <@user> <message>
