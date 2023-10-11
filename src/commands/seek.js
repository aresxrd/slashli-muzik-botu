// @ts-check

const { distube } = require("../components/client");
const { Command } = require("../components/files");

module.exports = new Command({
  data: (builder) =>
    builder
      .setName("seek")
      .setDescription("🎵 | Müziği İleriye Sarar!")
      .addNumberOption((option) =>
        option.setName("number").setDescription("Ne kadar ileri gitmek istiyorsun?").setRequired(true)
      ),
  async run(interaction) {
    await interaction.deferReply({ ephemeral: true });
    const queue = distube.getQueue(interaction);

    if (!queue) return interaction.followUp(` Listede henüz şarkı yok.`);

    const number = interaction.options.getNumber("number", true);
    queue.seek(queue.currentTime + number);
    return interaction.followUp("Başarıyla ilerlendi!");
  },
});
