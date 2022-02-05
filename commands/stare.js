const Discord = require('discord.js');
const anime = require('anime-actions');
const client = new Discord.Client();
module.exports = {
	name: 'stare',
	description: 'Stare at somone to intimdate them.',
	execute(message, args) {
   const user = message.mentions.users.first();
   if(!args[0]) return message.reply("stares at a wall pondering the meaning of life, everyone around them gets terribly confused and scared.")
    anime.stare().then(gif =>{
      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} stares at ${message.mentions.users.first().username} their attack harshly fell!`)
      .setImage(gif)
      .setColor('#ff6ed8')
      .setTimestamp();
     message.channel.send(embed);
    })
  },
};