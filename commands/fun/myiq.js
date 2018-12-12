const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = "/";
const bot = new commando.Client({
    commandPrefix: prefix
});

class myiqCommand extends commando.Command{
    constructor(client)
    {
      super(client, {
        name: 'myiq',
        group: 'fun',
        memberName: 'myiq',
        description: 'randomizes your iq'
      });
    }

    async run(message, args)
    {
        var iqnumbs = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',  '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',  '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
        message.channel.send({embed: new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setTitle('iq r8')
            .setColor("#4286f4")
            .addField('ur iq is ' + (Math.floor(Math.random() * iqnumbs.length) + 25) + '   💯', '->')});

            message.delete();
    }
}

module.exports = myiqCommand;

//!myiq
