import { Client, Message, ClientOptions, Intents} from "discord.js";

let client = new Client({intents: [Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]});

client.login("token");

client.on("message", async (msg) => {
    await msg.reply("test");
})