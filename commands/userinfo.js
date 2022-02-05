const Discord = require('discord.js');
module.exports = {
	name: 'userinfo',
	description: 'Shows information about the user.',
	async execute(message, args) {
   const { guild, channel } = message
   const user = message.mentions.users.first() || message.member.user
    const member = guild.members.cache.get(user.id)
    if (!args[0]) message.reply("Usage: !userinfo @user")
    const exampleEmbed2 = new Discord.MessageEmbed()
    .setColor('member.displayHexColor')
	  .setTitle(`About ${user.username}`)
    .setThumbnail(user.displayAvatarURL())
    .addFields(
		{ name: 'Your nickname:', 
    value: member.nickname
    },
    { name: 'Your ID:',
     value: user.id
    },
    { name: 'Bot?',
     value: user.bot
    },
    { name: 'Discriminator',
     value: user.discriminator
    },
    { name: 'Roles:',
     value: ""+member.roles.cache.map(r => r).join(' | ')+"",
    },
    { name: 'Highest role:',
     value: member.roles.highest.name
    },
    { name: 'Roles',
     value: member.roles.cache.size - 1,
    },
    { name: 'You joined this server at:',
     value: new Date(member.joinedTimestamp).toLocaleDateString(),
    },
    { name: 'You have joined discord at:',
     value: new Date(user.createdTimestamp).toLocaleDateString(),
    })
    .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
     .setTimestamp();
		message.channel.send(exampleEmbed2);  
	},
};