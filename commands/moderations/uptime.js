const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = "/";
const bot = new commando.Client({
  commandPrefix: prefix
});
const ms = require("ms");

class uptimeCommand extends commando.Command {
    constructor(client) 
    {
      super(client, {
        name: 'uptime', 
        group: 'moderations',
        memberName: 'uptime',
        description: "shows uptime of a user"
      });
    }

    async run(message, args)
    {
    }
}

module.exports = uptimeCommand;
