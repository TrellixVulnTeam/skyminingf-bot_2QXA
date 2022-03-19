const player = require("../../client/player");

module.exports = {
    name: "skip",
    description: "Skips the current playing song.",
    run: async (client, interaction, args) => {
        const queue = player.getQueue(interaction.guildId);
        if (!queue || !queue.playing) return interaction.followUp({ content: "❌ | No music is currently being played.", ephemeral: true });

        await queue.skip();

        interaction.followUp({ content: "🎶 | Skipped the current track!" });
    },
};
