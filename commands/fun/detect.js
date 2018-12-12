const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = "/";
const bot = new commando.Client({
    commandPrefix: prefix
});

class detectCommand extends commando.Command {
    constructor(client)
    {
      super(client, {
        name: 'detect',
        group: 'fun',
        memberName: 'detect',
        description: 'detects a message'
      });
    }

    async run(message, args)
    {
        var fargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
        var usermention = message.guild.member(message.mentions.users.first() || message.guild.members.get(fargs[0]));
        var fortuneresults = ['Yes', 'No', 'Probably No', 'Probably Yes', 'Maybe']
        var fortunemessage = fargs.join(" ").slice(7);
        if(usermention) return message.channel.send("Please donut mention a user. Instead, please enter their name!")
        if(!fargs) return message.channel.send('There seems to be a missing argument. Please enter a question');
        message.channel.send({embed: new Discord.RichEmbed()
            .setColor("#4286f4")
            .setAuthor(message.author.tag)
            .setDescription('d3t3ctr 1OO% 4ccur4cy')
            .addField(fortunemessage, fortuneresults[Math.floor(Math.random() * fortuneresults.length)])})

            message.delete();
    }
}

module.exports = detectCommand

//!detect <question>
