// @ts-check

const { Command, db } = require("../components/files");
const { distube } = require("../components/client");

module.exports = new Command({
  data: (builder) => builder.setName("leave").setDescription("🎵 | Bot Ses Kanalından Ayrılır!"),
  async run(interaction) {
    await interaction.deferReply({ ephemeral: true });
    const queue = distube.getQueue(interaction);

    if (!queue) return interaction.followUp(`Listede henüz şarkı yok.`);

    distube.voices.leave(interaction);
    db.delete(`music_${interaction.guild.id}`);
    return await interaction.followUp("Ses kanalından ayrılıyorum.");
  },
});
