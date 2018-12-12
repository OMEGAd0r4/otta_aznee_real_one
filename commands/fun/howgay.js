const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = "/";
const bot = new commando.Client({
    commandPrefix: prefix
});

class howgayCommand extends commando.Command {
    constructor(client)
    {
      super(client, {
        name: 'howgay',
        group: 'fun',
        memberName: 'howgay',
        description: 'defines how gay you are'
      });
    }
     async run(message, args)
     {
       var howgaypercentage = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,80,95,100,1000000000000000000000000000000000]
       message.channel.send({embed: new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#4286f4")
        .setDescription('gay r8 1OO% accurate')
        .addField("ur", howgaypercentage[Math.floor(Math.random() * howgaypercentage.length)] + "% gay 🏳️‍🌈")})
      }
}

module.exports = howgayCommand;

//!howgay 
