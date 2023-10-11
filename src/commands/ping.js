// @ts-check

const { EmbedBuilder } = require("discord.js");
const { Command } = require("../components/files");

module.exports = new Command({
  data: (builder) => builder.setName("ping").setDescription("🤖 | Botun Pingini Gösterir"),
  async run(interaction) {
    await interaction.deferReply({ ephemeral: true });
    const embed = new EmbedBuilder()
      .setDescription(interaction.client.ws.ping + " ms")
      .setColor("Aqua");
    return interaction.followUp({ embeds: [embed] });
  },
});
