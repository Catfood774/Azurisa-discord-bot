const Discord = require('discord.js');
module.exports = {
	name: 'serverinfo',
	description: 'Shows information about the server.',
	async execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#ff6ed8')
	  .setTitle(`About ${message.guild.name}`)
    .setThumbnail(message.guild.iconURL())
    .addFields(
    { name: 'Description:', 
     value: `${message.guild.description}`
    },
    { name: 'Server ID:', 
     value: `${message.guild.id}`
    },
    { name: 'Total members', 
     value: `${message.guild.memberCount}`, 
    },
    { name: 'Server roles', 
     value: ""+message.guild.roles.cache.map(r => r).join(' | ')+"", 
    },
    { name: 'Emojis', 
     value: ""+message.guild.emojis.cache.map(r => r).join(' | ')|| "None", 
    },
    { name: 'Server owner:', 
     value: `${message.guild.owner}`, 
    },
    { name: 'Created on:', 
     value: new Date(message.guild.createdTimestamp).toLocaleDateString()
    })
    .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
     .setTimestamp();
		message.channel.send(exampleEmbed); 
	},
};