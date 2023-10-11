// @ts-check

const { Command } = require("../components/files");
const { loop } = require("../components/commandData");

module.exports = new Command({
  data: (builder) => builder.setName("loop").setDescription("🎵 | Müziği Döngüye Alır!"),
  async run(interaction) {
    return loop(interaction);
  },
});
