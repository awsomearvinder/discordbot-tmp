import { Client, Intents } from "discord.js";

async function main() {
    const client = new Client({
        intents: [
            Intents.FLAGS.DIRECT_MESSAGES,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILD_MEMBERS,
        ],
    });

    await client.login("");

    client.on("message", async (message) => {
        await message.reply("test");
        for (const item of message.attachments) {
            console.log(item[1].url);
        }
    });
}

void main();
