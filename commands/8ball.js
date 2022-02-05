const Discord = require('discord.js')
module.exports = {
	name: '8ball',
	description: 'Gives a random answer to a random question.',
  execute(message, args) {
   if(!args[0]) return message.reply("Please ask a full question!")
   let replies = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good",
   "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "You've Got To Be Kidding...", "In Your Dreams", "Forget About It", "As If", "Not A Chance", "Not the slightest clue", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

   let result = Math.floor((Math.random() * replies.length));
   let question = args.slice().join(" ");
   
   message.channel.send(replies[result])
  }
};