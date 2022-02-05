const Discord = require('discord.js');
const client = new Discord.Client();
const keepAlive = require("./server")
client.commands = new Discord.Collection();
const fs = require('fs');
const prefix = '!';

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log("I'm in!");
  console.log(client.user.tag);
  console.log(client.guilds.cache.size)
  client.user.setPresence({
    status: 'dnd',
    activity: {
      name: 'you =)',
      type: 'WATCHING'
    }
  })
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});
keepAlive()
client.login(process.env.TOKEN);