var Discord = require("discord.js");

var mybot = new Discord.Client();

mybot.on("message", function(message) {
    if(message.content === "ping") {
        mybot.reply(message, "Pong");
    }
});

mybot.on("message", function(message) {
    if(message.content === "gtg") {
        mybot.reply(message, "Bye");
    }
});
//Can anyone make this so it can be pick up in the middle of a sentence. For example the bot would still exicute the code if the message is "I gtg".

mybot.on("message", function(message) {
    if(message.content === "Gtg") {
        mybot.reply(message, "Bye");
    }
});
//Can anyone make this so it can be pick up in the middle of a sentence. For example the bot would still exicute the code if the message is "I gtg".

mybot.on("message", function(message) {
    if(message.content === "hi") {
        mybot.reply(message, "Hello");
    }
});

mybot.on("message", function(message) {
    if(message.content === "Hi") {
        mybot.reply(message, "Hello");
    }
});

mybot.on("message", function(message) {
    if(message.content === "OMG") {
        mybot.reply(message, "I know right! Wait... What are we talking about");
    }
});

mybot.on("message", function(message) {
    if(message.content === "omg") {
        mybot.reply(message, "I know right! Wait... What are we talking about");
    }
});

mybot.on("message", function(message) {
    if(message.content === ">warn") {
        mybot.sendMessage("Please do not spam");
    }
});
//Needs to be fixed. Does not work. If anyone can please add code to make the message delete.

mybot.on("message", function(message) {
    if(message.content === "lol") {
        mybot.reply(message, "That is so funny!!");
    }
});

mybot.on("message", function(message) {
    if(message.content === "LOL") {
        mybot.reply(message, "That is so funny!!");
    }
});

mybot.loginWithToken("");
