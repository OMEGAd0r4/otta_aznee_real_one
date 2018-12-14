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
    if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
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
          .then(connection => { // Connection is an instance of VoiceConnection
            message.reply('I have successfully connected to the channel!');
          })
          .catch(console.log);
      } else {
        message.reply('You need to join a voice channel first!');
      }
    }
}

module.exports = joinCommand;

