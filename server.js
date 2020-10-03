

const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
client.login(TOKEN);
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [
    `Servers: ${client.guilds.size} | Users: ${client.users.size}`,
    `VENOM`
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/faith"
    });
  }, 3000);
});

client.on("ready", async ready => {
  var i = 0;
  var list = [
    "H",
    "HU",
    "HUN",
    "HUNT",
    "HUNTE",
    "HUNTER",
    "HUNTER ",
    "HUNTER M",
    "HUNTER MI",
    "HUNTER MIR",
    "HUNTER MIRA",
    "HUNTER MIRAM",
    "HUNTER MIRAMA",
    "HUNTER MIRAMAR",
  ];
  setInterval(() => {
    client.guilds.forEach(m => {
      m.setName(list[i]);

      if (i + 1 === 12) {
        i = 0;
      } else {
        i++;
      }
    });
  }, 1000);
});
