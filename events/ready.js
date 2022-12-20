const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(c) {
        // Emitted when the client becomes ready to start working.

        console.log(`bot online: ${c.user.tag}`);

    },
};