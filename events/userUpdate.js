const { Events } = require('discord.js');

module.exports = {
    name: Events.UserUpdate,
    async execute(oldUser, newUser) {
        // Emitted whenever a user's details (e.g. username) are changed.
        //   Triggered by the Discord gateway events:
        //     Events.UserUpdate,
        //     Events.GuildMemberUpdate,
        //     Events.PresenceUpdate.

        // try {


        // }
        // catch (error) {
        //     console.error('Error executing userUpdate.js');
        //     console.error(error);
        // }
    },
};