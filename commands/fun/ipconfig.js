const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = "/";
const bot = new commando.Client({
    commandPrefix: prefix
});

class ipconfigCommand extends commando.Command {
    constructor(client)
    {
      super(client, {
        name: 'ipconfig',
        group: 'fun',
        memberName: 'ipconfig',
        description: 'shows your ip information'
      });
    }

    async run(message, args)
    {

        var ipaddress = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',  '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',  '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
        var internetspeed = [1,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,10000000]
        var stealuserlocation = ["Vietnam", "Africa", "India", "Antartica", "Malaysia", "Australia", "England", "France", "Germany", "Brazil", "Canada"]
        var stealipuser = message.guild.member(message.mentions.users.first())

        if (!stealipuser) return message.channel.send("Please specify a user you are trying to relaease their information!")
        message.channel.send("Initializing").catch()
        message.channel.send("...").catch()
        message.channel.send("Hacking into directories").catch()
        message.channel.send("...").catch()
        message.channel.send("Stealing data").catch()
        message.channel.send("...").catch()
        message.channel.send("Releasing data").catch()
        message.channel.send("...").catch()
        message.channel.send("Sending information").catch()
        message.channel.send({embed: new Discord.RichEmbed()
            .setDescription("FACT FILE")
            .setColor("#4286f4")
            .addField("IP ADDRESS:" , Math.floor(Math.random() * ipaddress.length) + "." + Math.floor(Math.random() * ipaddress.length) + "." + Math.floor(Math.random() * ipaddress.length) + "." + Math.floor(Math.random() * ipaddress.length))
            .addField("INTERNET SPEED:", internetspeed[Math.floor(Math.random() * internetspeed.length)] + "mbp")
            .addField("USER LOCATION:", stealuserlocation[Math.floor(Math.random() * stealuserlocation.length)])})
        message.channel.send("...").catch()
        message.channel.send("Ddossing user").catch()
        message.channel.send("Intializing steps").catch()
        message.channel.send("Complete").catch()
    }
}

module.exports = ipconfigCommand;

//!ipconfig
