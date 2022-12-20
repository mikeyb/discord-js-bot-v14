const { Events } = require('discord.js');

module.exports = {
    name: Events.Error,
    async execute(error) {
        // Emitted when the client encounters an error.
        //   Errors thrown within this event do not have a catch handler,
        //   it is recommended to not use async functions as error event handlers.
        //   See the Node.js docs for details: https://nodejs.org/api/events.html#capture-rejections-of-promises

        // try {


        // }
        // catch (e) {
        //     console.error('Error executing error.js');
        //     console.error(e);
        // }
    },
};