const Discord = require('discord.js');
const anime = require('anime-actions');
const client = new Discord.Client();
module.exports = {
	name: 'hug',
	description: 'Hug someone.',
	execute(message, args) {
   const user = message.mentions.users.first();
   if(!args[0]) return message.reply("was lonely and hugged the wall.")
    anime.hug().then(gif =>{
      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} hugs ${message.mentions.users.first().username} :heart:`)
      .setImage(gif)
      .setColor('#ff6ed8')
      .setTimestamp();
     message.channel.send(embed);
    })
  },
};