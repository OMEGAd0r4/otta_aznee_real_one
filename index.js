//PLUGINS
const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = "/";
const bot = new commando.Client({
    commandPrefix: prefix
});
const ms = require('ms');
const YTDL = require('ytdl-core')
const YouTube = require('simple-youtube-api');
//PLUGINS

//BOT TOKEN
bot.login(proccess.token.nv);
//BOT TOKEN

//GETS THE BOT ONLINE
bot.on('ready',function(){
    console.log("Bot is now online!, residing on " + bot.guilds.size + " Servers");
    bot.user.setActivity("/help | residing on " + bot.guilds.size + " Servers", { type: 'PLAYING' });
});
//GETS THE BOT ONLINE

//REGISTIES
bot.registry.registerGroup('moderations', 'Moderations');
bot.registry.registerGroup('fun', 'Fun')
bot.registry.registerGroup('music', 'Music')
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.registry.registerDefaults();
//REGISTIES

//ANTI-SWEAR GUARDIAN
bot.on('message', async message => {
    //blacklisted words
    let blacklisted = [] //words put , after the word
  
    //2 looking for words
    let foundInText = false;
    for (var i in blacklisted) { // loops through the blacklisted list
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    // checks casesensitive words
  
    //3 deletes and send message
      if (foundInText) {
        message.delete();
        message.channel.send(`The Alphabetical Guardian has caught ${message.author} being inappropiate and have been warned!`)
        bot.channels.get('508462044584869907').send({embed: new Discord.RichEmbed()
            .setDescription("SOMEONE GOT WARNED HAHAHAHA")
            .addField("WARN USER", message.author)
            .addField("REASON AUTOMATICALLY WARNED", message.content)})
    }
});
//ANTI-SWEAR GUARDIAN

//YT STUFF
global.servers = {};

//WELCOME MESSAGE
bot.on('guildMemberAdd', member => {

    var memberrole = message.guild.roles.find(`name`, "Member");

    member.guild.channels.get('508462044584869907').send(`Welcome ${guildMemberAdd} to the Alpha Netowrk!`).addRole(memberrole.id)
});









































