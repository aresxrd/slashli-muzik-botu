// @ts-check

const { Command } = require("../components/files");
const { nowPlaying } = require("../components/commandData");

module.exports = new Command({
  data: (builder) =>
    builder
      .setName("nowplaying")
      .setDescription("🎵 | Şuanda Çalan Müzik Hakkında Bilgi Verir!"),
  async run(interaction) {
    return nowPlaying(interaction);
  },
});
