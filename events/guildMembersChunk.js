const { Events } = require('discord.js');

module.exports = {
    name: Events.GuildMembersChunk,
    async execute(members, guild, chunk) {
        // Emitted whenever a chunk of guild members is received (all members come from the same guild).

        // try {


        // }
        // catch (error) {
        //     console.error('Error executing guildMembersChunk.js');
        //     console.error(error);
        // }
    },
};