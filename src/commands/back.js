// @ts-check

const { Command } = require("../components/files");
const { distube } = require("../components/client");

module.exports = new Command({
  data: (builder) =>
    builder
      .setName("back")
      .setDescription("🎵 | Müziği Geriye Alır!")
      .addNumberOption((option) =>
        option.setName("number").setDescription("Ne kadar geriye gitmek istiyorsun?").setRequired(true)
      ),
  async run(interaction) {
    await interaction.deferReply({ ephemeral: true });
    const queue = distube.getQueue(interaction);

    if (!queue) return interaction.followUp(`Listede henüz şarkı yok.`);

    const number = interaction.options.getNumber("number", true);
    queue.seek(queue.currentTime - number);
    return interaction.followUp("Şarkı başarıyla geri alındı.");
  },
});
