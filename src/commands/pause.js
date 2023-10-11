// @ts-check

const { Command } = require("../components/files");
const { pause } = require("../components/commandData");

module.exports = new Command({
  data: (builder) => builder.setName("pause").setDescription("🎵 | Müziği Durdurur!"),
  async run(interaction) {
    return pause(interaction);
  },
});
