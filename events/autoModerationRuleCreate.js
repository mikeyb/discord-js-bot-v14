const { Events } = require('discord.js');

module.exports = {
    name: Events.AutoModerationRuleCreate,
    async execute(autoModerationRuleCreate) {
        // Emitted whenever an auto moderation rule is created.
        // This event requires the PermissionFlagsBits.ManageGuild permission.

        try {

            const { guild } = autoModerationRuleCreate;
            // const { actions, client, creatorId, enabled, eventType, exemptChannels, exemptRoles, guild, id, name, triggerMetadata, triggerType } = autoModerationRuleCreate;

            console.log(
                `Auto moderation rule create execution for guild id ${guild.id} was executed.`,
            );

        }
        catch (error) {
            console.error('Error executing autoModerationRuleCreate.js');
            console.error(error);
        }
    },
};