const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = "/";
const bot = new commando.Client({
  commandPrefix: prefix
});
const ms = require("ms");
const YTDL = require('ytdl-core');

function Play(connection, message)
{
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(`${server.queue[0]}`, {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function(){
        if (server.queue[0])
        {
            Play (connection, message);
        }
        else
        {
            connection.disconnect()
        }
    })
}

class joinCommand extends commando.Command{
    constructor(client){
        super(client,{
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Joins a voice channel'
        })
    }
    async run(message, args)
    {
        if (message.member.voiceChannel)
        {
            if(message.guild.voiceConnection)
            {
                if (!servers[message.guild.id])
                {
                    servers[message.guild.id] = {queue: []}
                }
                var server = servers[message.guild.id]
                message.member.voiceChannel.join()
                    .then(connection =>{
                        message.channel.send("Joining voice channel");
                        server.queue.push(args);
                        Play(connection, message);
                    })
            }
        }
        else
        {
            message.reply("Please join a voice channel!");
        }
    }
}

module.exports = joinCommand;
