const Discord = require('discord.js');
const anime = require('anime-actions');
const client = new Discord.Client();
module.exports = {
	name: 'scream',
	description: 'Scream at someone.',
	execute(message, args) {
   const user = message.mentions.users.first();
   if(!args[0]) return message.reply("internally screams.")
    anime.scream().then(gif =>{
      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} screams into ${message.mentions.users.first().username} ear temporarily making them deaf :')'`)
      .setImage(gif)
      .setColor('#ff6ed8')
      .setTimestamp();
     message.channel.send(embed);
    })
  },
};