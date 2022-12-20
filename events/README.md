# Examples

```js
const { Events } = require("discord.js");

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(c) {
        console.log(`Ready! Logged in as ${c.user.tag}`);
    },
};
```

```js
const { Events } = require("discord.js");

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(
            interaction.commandName
        );

        if (!command) {
            console.error(
                `No command matching ${interaction.commandName} was found.`
            );
            return;
        }

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(`Error executing ${interaction.commandName}`);
            console.error(error);
        }
    },
};
```

# Events

-   [applicationCommandPermissionsUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-applicationCommandPermissionsUpdate)
-   [autoModerationActionExecution](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-autoModerationActionExecution)
-   [autoModerationRuleCreate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-autoModerationRuleCreate)
-   [autoModerationRuleDelete](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-autoModerationRuleDelete)
-   [autoModerationRuleUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-autoModerationRuleUpdate)
-   [channelCreate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-channelCreate)
-   [channelDelete](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-channelDelete)
-   [channelPinsUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-channelPinsUpdate)
-   [channelUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-channelUpdate)
-   [debug](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-debug)
-   [emojiCreate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-emojiCreate)
-   [emojiDelete](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-emojiDelete)
-   [emojiUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-emojiUpdate)
-   [error](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-error)
-   [guildBanAdd](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildBanAdd)
-   [guildBanRemove](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildBanRemove)
-   [guildCreate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildCreate)
-   [guildDelete](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildDelete)
-   [guildIntegrationsUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-)
-   [guildIntegrationsUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-)
-   [guildMemberAdd](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildMemberAdd)
-   [guildMemberAvailable](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildMemberAvailable)
-   [guildMemberRemove](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildMemberRemove)
-   [guildMembersChunk](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildMembersChunk)
-   [guildMemberUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildMemberUpdate)
-   [guildScheduledEventCreate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildScheduledEventCreate)
-   [guildScheduledEventDelete](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildScheduledEventDelete)
-   [guildScheduledEventUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildScheduledEventUpdate)
-   [guildScheduledEventUserAdd](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildScheduledEventUserAdd)
-   [guildScheduledEventUserRemove](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildScheduledEventUserRemove)
-   [guildUnavailable](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildUnavailable)
-   [guildUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-guildUpdate)
-   [interactionCreate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-interactionCreate)
-   [invalidated](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-invalidated)
-   [inviteCreate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-inviteCreate)
-   [inviteDelete](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-inviteDelete)
-   [messageCreate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-messageCreate)
-   [messageDelete](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-messageDelete)
-   [messageDeleteBulk](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-messageDeleteBulk)
-   [messageReactionAdd](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-messageReactionAdd)
-   [messageReactionRemove](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-messageReactionRemove)
-   [messageReactionRemoveAll](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-messageReactionRemoveAll)
-   [messageReactionRemoveEmoji](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-messageReactionRemoveEmoji)
-   [messageUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-messageUpdate)
-   [presenceUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-presenceUpdate)
-   [ready](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-ready)
-   [roleCreate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-roleCreate)
-   [roleDelete](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-roleDelete)
-   [roleUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-roleUpdate)
-   [shardDisconnect](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-shardDisconnect)
-   [shardError](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-shardError)
-   [shardReady](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-shardReady)
-   [shardReconnecting](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-shardReconnecting)
-   [shardResume](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-shardResume)
-   [stageInstanceCreate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-stageInstanceCreate)
-   [stageInstanceDelete](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-stageInstanceDelete)
-   [stageInstanceUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-stageInstanceUpdate)
-   [stickerCreate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-stickerCreate)
-   [stickerDelete](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-stickerDelete)
-   [stickerUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-stickerUpdate)
-   [threadCreate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-threadCreate)
-   [threadDelete](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-threadDelete)
-   [threadListSync](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-threadListSync)
-   [threadMembersUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-threadMembersUpdate)
-   [threadMemberUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-threadMemberUpdate)
-   [threadUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-threadUpdate)
-   [typingStart](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-typingStart)
-   [userUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-userUpdate)
-   [voiceStateUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-voiceStateUpdate)
-   [warn](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-warn)
-   [webhookUpdate](https://discord.js.org/#/docs/main/main/class/Client?scrollTo=e-webhookUpdate)
