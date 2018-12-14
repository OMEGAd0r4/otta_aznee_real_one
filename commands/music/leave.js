const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = "/";
const bot = new commando.Client({
  commandPrefix: prefix
});

class leaveCommand extends commando.Command{
    constructor(client){
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Leaves a voice channel'
        })
    }

    async run(message, args)
    {
        if(message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect().then(message.channel.send("**Successfully disconnected from the voice channel**"))
        }
        else
        {
            message.reply("**I am not in a voice channel to leave!**")
        }
    }
}

module.exports = leaveCommand;
