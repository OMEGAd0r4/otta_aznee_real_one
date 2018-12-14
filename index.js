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
    console.log("Bot is now online!, residing on " + bot.guilds.size + " Servers");
    bot.user.setActivity("/help | residing on " + bot.guilds.size + " Servers", { type: 'PLAYING' });
});
//GETS THE BOT ONLINE

//REGISTIES
bot.registry.registerGroup('moderations', 'Moderations');
bot.registry.registerGroup('fun', 'Fun')
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.registry.registerDefaults();
//REGISTIES

//ANTI-SWEAR GUARDIAN
bot.on('message', async message => {
    //blacklisted words
    let blacklisted = ['penis', 'vagina', 'stfu', 'assault', 'arse', 'fuck', 'cunt', 'faggot', 'biatch', 'bitch', 'wank', 'gae', 'gay', 'retarded', 'pussy', 'homosexual', 'transgender', 'lesbian', 'nigge', 'nigga', 'nig', 'thot', 'twit', 'twat', 'shit', 'slut', 'hoe'] //words put , after the word
  
    //2 looking for words
    let foundInText = false;
    for (var i in blacklisted) { // loops through the blacklisted list
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    // checks casesensitive words
  
    //3 deletes and send message
      if (foundInText) {
        message.delete();
        message.reply("The Alphabetical Guardian has caught you being inappropiate and have been warned!")
        bot.channels.get('508462044584869907').send({embed: new Discord.RichEmbed()
            .setDescription("SOMEONE GOT WARNED HAHAHAHA")
            .addField("WARN USER", message.author)
            .addField("REASON AUTOMATICALLY WARNED", blacklisted)})
    }
});
//ANTI-SWEAR GUARDIAN

//WELCOME MESSAGE
bot.on('guildMemberAdd', member => {

    var memberrole = message.guild.roles.find(`name`, "Member");

    member.guild.channels.get('508462044584869907').send(`Welcome ${guildMemberAdd} to the Alpha Netowrk!`).addRole(memberrole.id)
});

//UPTIME
bot.on('message', message => {
    if (message.content.startsWith(prefix + 'uptime'))
    {
        let days = Math.floor(bot.uptime / 86400000);
        let hours = Math.floor(bot.uptime / 3600000) % 24;
        let minutes = Math.floor(bot.uptime / 60000) % 60;
        let seconds = Math.floor(bot.uptime / 1000) % 60;

        var uptimeuser = message.guild.member(message.mentions.users.first());
        var uptimeuserargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS

        if (!uptimeuser) return message.channel.send({embed: new Discord.RichEmbed()
            .setDescription(":x: **Missing args**")
            .setColor("#FF4040")
            .addField("->", "/uptime [User]")});

        message.channel.send({embed: new Discord.RichEmbed()
        .setDescription("Uptime")
        .setAuthor(message.author.tag)
        .addField(`**__Uptime__**`, `${uptimeuser} has been online for ${days}**D** ${hours}**H** ${minutes}**M** ${seconds}**S**`)});
    }
})
