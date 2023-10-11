// @ts-check

const { resume } = require("../components/commandData");
const { Command } = require("../components/files");

module.exports = new Command({
  data: (builder) => builder.setName("resume").setDescription("🎵 | Müziği Devam Ettirir!"),
  async run(interaction) {
    return resume(interaction);
  },
});
