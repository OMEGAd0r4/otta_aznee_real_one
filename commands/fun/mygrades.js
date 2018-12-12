const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = "/";
const bot = new commando.Client({
    commandPrefix: prefix
});

class mygradesCommand extends commando.Command {
    constructor(client)
    {
      super(client, {
        name: 'mygrades',
        group: 'fun',
        memberName: 'mygrades',
        description: 'randomizes up your grades'
      });
    }

    async run(message, args)
    {
      var theeterms = ['1', '2', '3', '4']
      var theelessons = ['english 💻', 'ICT 💻', 'PE 🏅', 'science 🔬', 'business 💵', 'math ➗', 'geography 🌎', 'DT 🌎', 'MFL 🇨🇳 🇫🇷', 'art 🎨']
      var thenumbergrades = [1, 2, 3, 4, 5, 6, 7, 8]
      var thelettergrades = ['A', 'B', 'C']
      var theexpections = ['AE 💯', 'EE 😊', 'ME 👌', 'BE 😡']

      message.channel.send({embed: new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setTitle('grades r8 machine 100% accuracy 🌈')
        .setColor("#4286f4")
        .addField('**1n t3rm**', theeterms[Math.floor(Math.random() * theeterms.length)])
        .addField('**1n th3 l3550n 0f**', theelessons[Math.floor(Math.random() * theelessons.length)])
        .addField('**ur gr4d35 w1ll b3**' , thenumbergrades[Math.floor(Math.random() * thenumbergrades.length)] + thelettergrades[Math.floor(Math.random() * thelettergrades.length)])
        .addField('**ur 3xp3ct4t10n5 w1ll b3**', theexpections[Math.floor(Math.random() * theexpections.length)])})

        message.delete();
    }
} 

module.exports = mygradesCommand;

//!mygrades
