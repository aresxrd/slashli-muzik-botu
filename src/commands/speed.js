// @ts-check

const { setSpeed } = require("../components/commandData");
const { Command } = require("../components/files");

module.exports = new Command({
  data: (builder) => builder.setName("speed").setDescription("🎵 | Şarkıyı Hızlandırır!"),
  async run(interaction) {
    return setSpeed(interaction);
  },
});
