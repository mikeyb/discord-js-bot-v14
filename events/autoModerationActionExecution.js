const { Events } = require('discord.js');

module.exports = {
    name: Events.AutoModerationActionExecution,
    async execute(autoModerationActionExecution) {
        // Emitted whenever an auto moderation rule is triggered.
        // This event requires the PermissionFlagsBits.ManageGuild permission.

        try {

            const { guild } = autoModerationActionExecution;
            // const { action, alertSystemMessageId, guild, matchedContent, matchedKeyword, messageId, ruleId, ruleTriggerType, userId } = autoModerationActionExecution;

            console.log(
                `Auto moderation action execution for guild id ${guild.id} was executed.`,
            );

        }
        catch (error) {
            console.error('Error executing autoModerationActionExecution.js');
            console.error(error);
        }
    },
};