const Discord = require('discord.js');
const anime = require('anime-actions');
const client = new Discord.Client();
module.exports = {
	name: 'bonk',
	description: 'Bonk someone.',
	execute(message, args) {
   const user = message.mentions.users.first();
   if(!args[0]) return message.reply("tries to bonk someone and misses, they end up bonking themselves.")
    anime.bonk().then(gif =>{
      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} bonks ${message.mentions.users.first().username}'`)
      .setImage(gif)
      .setColor('#ff6ed8')
      .setTimestamp();
     message.channel.send(embed);
    })
  },
};