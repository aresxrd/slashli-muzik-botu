// @ts-check

const { setSlow } = require("../components/commandData");
const { Command } = require("../components/files");

module.exports = new Command({
  data: (builder) => builder.setName("slowed").setDescription("🎵 | Şarkıyı Yavaşlatır!"),
  async run(interaction) {
    return setSlow(interaction);
  },
});
