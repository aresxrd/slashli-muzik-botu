// @ts-check

const { skip } = require("../components/commandData");
const { Command } = require("../components/files");

module.exports = new Command({
  data: (builder) => builder.setName("skip").setDescription("🎵 | Şarkıyı Atlar!"),
  async run(interaction) {
    return skip(interaction);
  },
});
