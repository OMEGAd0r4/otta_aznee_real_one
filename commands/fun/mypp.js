const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = "/";
const bot = new commando.Client({
    commandPrefix: prefix
});

class myppCommand extends commando.Command{
    constructor(client)
    {
      super(client, {
        name: 'mypp',
        group: 'fun',
        memberName: 'mypp',
        description: 'randomizes how big or small your pp is'
      });
    }

    async run(message, args)
    {
        var ppsize = ['', '=', '==', '===', '====', '=====', '======', '=======', '========', '=========', '==========', '=================================================================================']
        message.channel.send({embed: new Discord.RichEmbed()
            .setDescription('1OO% accurate pp r8')
            .setColor("#4286f4")
            .setAuthor(message.author.tag)
            .addField('ur pp size is', '8' + ppsize[Math.floor(Math.random() * ppsize.length)] + 'D')})

            message.delete();
    }
}

module.exports = myppCommand

//!mypp
