import { Client, Intents } from "discord.js";

let client = new Client({
  intents: [
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});

client.login("");

client.on("message", async (msg) => {
  await msg.reply("test");
  for (let item of msg.attachments) {
    console.log(item[1].url);
  }
});
