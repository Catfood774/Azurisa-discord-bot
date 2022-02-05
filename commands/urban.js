const Discord = require('discord.js');
const client = new Discord.Client();
const urban = require("urban");

module.exports = {
	name: 'urban',
	description: 'Defines a term using urban dictionary api.',
 async execute(message, args) {
   if (!args[0]) message.reply("You need to give me a search term!")
    urban(args).first(json => {
     if (!json) return message.reply("Nothing found, sorry!");

     let embed = new Discord.MessageEmbed()
       .setColor('#ff6ed8')
       .setURL(json.permalink)
	     .setTitle(json.word)
       .setThumbnail('https://pbs.twimg.com/media/DPjHISaXkAAzWea.jpg')
       .addFields(
       { name: 'Definition:', 
         value: json.definition
       },
       { name: 'Example', 
         value: json.example || 'Undefined', 
       },
       { name: 'Upvotes 👍', 
         value: json.thumbs_up || 'Undefined',
         inline: true 
       },
       { name: 'Downvotes 👎', 
         value: json.thumbs_down || 'Undefined', 
         inline:true
       },
       { name: 'Written by:', 
         value: json.author || 'None'
       },
       { name: 'Written on:', 
         value: json.written_on || 'None'
       }
       )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp();
      message.channel.send(embed);
    });
  }
}