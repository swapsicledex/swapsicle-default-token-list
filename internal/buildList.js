const { version } = require("../package.json");

const mainnet = require("../tokens/mainnet.json");
const fantom = require("../tokens/fantom.json");
const matic = require("../tokens/matic.json");
const bsc = require("../tokens/bsc.json");
const avalanche = require("../tokens/avalanche.json");
const fuji = require("../tokens/fuji.json");
const arbitrum = require("../tokens/arbitrum.json");
const telos = require("../tokens/telos.json");
const mantle = require("../tokens/mantle.json");
const optimism = require("../tokens/optimism.json");
const taiko = require("../tokens/taiko.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "Swapsicle",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "ipfs://QmU6GmyWgu6Sv39RPG2iU4YsquXW1XgaRMkigZDyT48vKs",
    keywords: ["swapsicle", "default", "verified", "audited"],
    tokens: [
      ...mainnet,
      ...fantom,
      ...matic,
      ...bsc,
      ...avalanche,
      ...fuji,
      ...optimism,
      ...arbitrum,
      ...telos,
      ...mantle,
      ...taiko,
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
