const Discord = require('discord.js');
const anime = require('anime-actions');
const client = new Discord.Client();
module.exports = {
	name: 'pat',
	description: 'Pat someone to make them feel slightly better.',
	async execute(message, args) {
   const user = message.mentions.users.first();
   if(!args[0]) return message.reply("Pats themselves on the back.")
   anime.pat().then(gif =>{
      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} pats ${message.mentions.users.first().username} to comfort them`)
      .setImage(gif)
      .setColor('#ff6ed8')
      .setTimestamp();
     message.channel.send(embed);
    })
	},
};