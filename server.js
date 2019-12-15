const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", async () => {
  console.log('BOT SUDAH NYALA');
//const Discord = require('discord.js');
//const client = new Discord.Client();

//bot.on('ready', () => {
  
  console.log('System Sudah Aktif!');
   console.log
  
const timezone = require(`moment-timezone`)
  
function botStatus() {
  
  let waktu2 = bot.channels.find('id', '655600720745201699')
  waktu2.setName(`${timezone().tz("Asia/Jakarta").format("⏰ HH:mm [WIB]") + " "}`)
}; setInterval(botStatus, 30000)
  
});
bot.on("message", async (message) => {
  if (message.content.startsWith("kalem")) {
    message.channel.send("pong!");
   
  }

  
});
bot.on("message", async (message) => {
  if (message.content.startsWith("mng")) {
    message.channel.send("@everyone @here");
  
  }
  
});
bot.on("message", async (message) => {
  if (message.content.startsWith("dc")) {
    message.channel.send("**LINK DISCORD** : https://discord.gg/XXDADSR");
  
  }
  
});
bot.on("message", async (message) => {
  if (message.content.startsWith("pan")) {
    message.channel.send("tek!");
  
  }
  
});
bot.on("message", async (message) => {
  if (message.content.startsWith("kon")) {
    message.channel.send("tol");
  
  }
  
});
bot.on("message", async (message) => {
  if (message.content.startsWith("link")) {
    message.channel.send("``111.90.150.204`` ``COPY PASTE KEGOOGLE OKE:)``");
  
  }
  
});

bot.login(process.env.BOT_TOKEN)
