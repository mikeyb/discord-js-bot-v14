const { Events } = require('discord.js');

module.exports = {
    name: Events.ApplicationCommandPermissionsUpdate,
    async execute(data) {
        // Emitted whenever permissions for an application command in a guild were updated.
        // This includes permission updates for other applications in addition to the logged in client,
        //   check data.applicationId to verify which application the update is for

        try {

            const { guildId, applicationId, permissions } = data;

            console.log(
                `Permissions for application id ${applicationId} in guild id ${guildId} were updated.`,
            );

            console.log(permissions);

        }
        catch (error) {
            console.error('Error executing applicationCommandPermissionsUpdate.js');
            console.error(error);
        }
    },
};