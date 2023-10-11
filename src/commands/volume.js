// @ts-check

const { setVolume } = require("../components/commandData");
const { Command } = require("../components/files");

module.exports = new Command({
  data: (builder) =>
    builder
      .setName("volume")
      .setDescription("🎵 | Şarkının Ses Seviyesini Ayarlar!")
      .addNumberOption((option) =>
        option
          .setName("number")
          .setDescription("1-100")
          .setRequired(true)
          .setMinValue(1)
          .setMaxValue(100)
      ),
  async run(interaction) {
    return setVolume(interaction);
  },
});
