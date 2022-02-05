const Discord = require('discord.js');
const anime = require('anime-actions');
const client = new Discord.Client();
module.exports = {
	name: 'cuddle',
	description: 'Cuddle with someone.',
	async execute(message, args) {
   const user = message.mentions.users.first();
   if(!args[0]) return message.reply("curled up into a ball and sat in the corner of the room all alone, cuddling themselves.")
   anime.cuddle().then(gif =>{
      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} cuddles with ${message.mentions.users.first().username} how cute! :heart:`)
      .setImage(gif)
      .setColor('#ff6ed8')
      .setTimestamp();
     message.channel.send(embed);
    })
	},
};