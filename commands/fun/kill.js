const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = "/";
const bot = new commando.Client({
    commandPrefix: prefix
});

class killCommand extends commando.Command {
    constructor(client)
    {
      super(client, {
        name: 'kill',
        group: 'fun',
        memberName: 'kill',
        description: 'kills people in real life no joke - pedo - Quan Lam Viec - dangerous man'
      });
    }

    async run (message, args)
    {
        var killargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
        var killuser = message.guild.member(message.mentions.users.first())

        message.channel.send({embed: new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setColor("#4286f4")
            .setDescription('som1 g0t k1ll3d')
            .addField('1nf0', `${message.author} has killed ${killuser}`)})

            message.delete();
    }
}

module.exports = killCommand;

//!kill <user>
