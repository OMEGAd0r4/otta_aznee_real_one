const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = "/";
const bot = new commando.Client({
    commandPrefix: prefix
});

class sayCommand extends commando.Command {
    constructor(client)
    {
      super(client, {
        name: 'say',
        group: 'fun',
        memberName: 'say',
        description: 'bot will say what ever you say'
      });
    }

    async run(message, args)
    {

        if (!saymessage) message.channel.send("Please enter a message you want to say!")

        var sayargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
        var saymessage = sayargs.join(" ").slice(4);
        message.channel.send({embed: new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setColor("#4286f4")
            .setDescription('th3 alpha b0t s4ys')
            .addField('m3ssage f0r yall', saymessage)})

            message.delete();
    }
}

module.exports = sayCommand
