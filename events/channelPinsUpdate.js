const { Events } = require('discord.js');

module.exports = {
    name: Events.ChannelPinsUpdate,
    async execute(channel, time) {
        // Emitted whenever the pins of a channel are updated.
        //   Due to the nature of the WebSocket event,
        //   not much information can be provided easily here - you need to manually check the pins yourself.

        // try {


        // }
        // catch (error) {
        //     console.error('Error executing channelPinsUpdate.js');
        //     console.error(error);
        // }
    },
};