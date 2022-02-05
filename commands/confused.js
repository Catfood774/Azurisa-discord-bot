const Discord = require('discord.js');
const anime = require('anime-actions');
const client = new Discord.Client();
module.exports = {
	name: 'confused',
	description: 'When you do not have a clue of whats going on.',
	execute(message, args) {
   
    anime.confused().then(gif =>{
      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} looks around completely perplexed.`)
      .setImage(gif)
      .setColor('#ff6ed8')
      .setTimestamp();
     message.channel.send(embed);
    })
  },
};