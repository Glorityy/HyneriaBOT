const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("HyneriaUHC |!help");
    console.log("Le bot a bien été connecté");
})

bot.on('message', function (message){
  if(message.content === '!help'){
    message.channel.sendMessage('Aide :');
    message.channel.sendMessage('!ip');
    message.channel.sendMessage('!mumble');
    message.channel.sendMessage('!boutique');
    message.channel.sendMessage('!discord');
  }
})
