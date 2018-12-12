const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = "/";
const bot = new commando.Client({
  commandPrefix: prefix
});
const ms = require("ms");

class rulesCommand extends commando.Command{
  constructor(client) 
  {
    super(client, {
      name: 'rules', 
      group: 'moderations',
      memberName: 'rules',
      description: "Sends a message of the server's rules"
    });
  }
  async run(message,args)
  {
    message.channel.send({embed: new Discord.RichEmbed()
      .setColor("#2AC940")
      .setTitle('**DISCORD SERVER RULES**')
      .setDescription('Please follow these rules or there will you will be warned, kicked, or banned')
      .addField('No swearing or inappropriate language is allowed in the server, in text **and** in calls.', 'If you are caught, you will be warned and added to our database')
      .addField('We do not tolerate cyber bullying in this server.', 'If you are caught, or reported, the problem will move on to the school to sort out.')
      .addField('No spam is allowed.', 'You will be recieving a warn to be in resolved')
      .addField('Be respectful to each other.', '->')
      .addField('Speak english as much as possible for purposes','->')
      .addField('Only chat in the designated channels. For example, a channel to help with homework should only contain texts related to homework.', '->')
      .addField('No toxic talking or threats.', 'Will be resolved in a warn, kick or ban depending on the situation')
      .addField('We celebrate the best of Year 8, we do not encourage the bad things.', '->')
      .addField('No invasion of privacy', 'Will be resolved into a ban/kick/warn')
     .addField('If you violate too many times, the school will be informed.', '->')
     .addField('**If you want any more rules to be added, please contact any member of the support team**', '->')})
     message.delete();
  }
}

module.exports = rulesCommand

