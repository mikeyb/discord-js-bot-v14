const { Events } = require('discord.js');

module.exports = {
    name: Events.ThreadMembersUpdate,
    async execute(addedMembers, removedMembers, thread) {
        // Emitted whenever members are added or removed from a thread.
        // This event requires the GatewayIntentBits.GuildMembers privileged gateway intent.

        // try {


        // }
        // catch (error) {
        //     console.error('Error executing threadMembersUpdate.js');
        //     console.error(error);
        // }
    },
};