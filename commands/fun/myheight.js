const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = "/";
const bot = new commando.Client({
    commandPrefix: prefix
});

class myheightCommand extends commando.Command {
    constructor(client)
    {
      super(client, {
        name: 'myheight',
        group: 'fun',
        memberName: 'myheight',
        description: 'randomizes up your height'
      });
    }

    async run(message ,args)
    {
        var heightresult = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,80,95,100, 0.1]
        var heightmeasurement = ['cm', 'm', 'ft']
        message.channel.send({embed: new Discord.RichEmbed()
            .setDescription('1OO% accurate h31ght d3t3ctr')
            .setAuthor(message.author.tag)
            .setColor("#4286f4")
            .addField('ur', heightresult[Math.floor(Math.random() * heightresult.length)] + heightmeasurement[Math.floor(Math.random() * heightmeasurement.length)] + ' t0ll')})

            message.delete();
    }
}

module.exports = myheightCommand;

//myheight
