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
bot.login(process.env.token);
//BOT TOKEN

//GETS THE BOT ONLINE
bot.on('ready',function(){
    console.log(`Bot is now online!, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
    bot.user.setActivity(`/help | Slender Man`, { type: 'PLAYING' });
});

bot.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    bot.user.setActivity(`/help | Helping ${bot.users.size} users, in ${bot.guilds.size} servers`, { type: 'PLAYING' });
});

bot.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    bot.user.setActivity(`/help | Helping ${bot.users.size} users, in ${bot.guilds.size} servers`, { type: 'PLAYING' });
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
    let blacklisted = [" asshole", "fuck", " nigger ", "faggot", "retard", " ass ", "whore", "slut", "pussy", "nigga"] //words put , after the word
  
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





































































