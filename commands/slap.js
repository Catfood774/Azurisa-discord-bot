const Discord = require('discord.js');
const anime = require('anime-actions');
const client = new Discord.Client();
module.exports = {
	name: 'slap',
	description: 'Slap someone to show your disapproval.',
	async execute(message, args) {
   const user = message.mentions.users.first();
   if(!args[0]) return message.reply("Slaps themselves to improve focus?.")
   anime.slap().then(gif =>{
      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} slaps ${message.mentions.users.first().username}`)
      .setImage(gif)
      .setColor('#ff6ed8')
      .setTimestamp();
     message.channel.send(embed);
    })
	},
};