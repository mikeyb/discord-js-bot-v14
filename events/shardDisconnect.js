const { Events } = require('discord.js');

module.exports = {
    name: Events.ShardDisconnect,
    async execute(event, id) {
        // Emitted when a shard's WebSocket disconnects and will no longer reconnect.

        // try {


        // }
        // catch (error) {
        //     console.error('Error executing shardDisconnect.js');
        //     console.error(error);
        // }
    },
};