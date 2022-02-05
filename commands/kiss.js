const Discord = require('discord.js');
const anime = require('anime-actions');
const client = new Discord.Client();
module.exports = {
	name: 'kiss',
	description: 'Kiss someone.',
	async execute(message, args) {
   const user = message.mentions.users.first();
   if(!args[0]) return message.reply("Sorry you can't kiss yourself, guess your gonna be lonely for a while, unless you want to kiss m-")
   anime.kiss().then(gif =>{
      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} kisses ${message.mentions.users.first().username} how cute! :heart:`)
      .setImage(gif)
      .setColor('#ff6ed8')
      .setTimestamp();
     message.channel.send(embed);
    })
  },
};