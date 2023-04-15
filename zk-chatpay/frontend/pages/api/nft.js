const ethers = require("ethers");

(async () => {
  const provider = new ethers.providers.JsonRpcProvider("https://sleek-lingering-market.ethereum-goerli.discover.quiknode.pro/3f5cc6bcbbd5bb4ac343e9673d1db6352f917c7f/");
  provider.connection.headers = { "x-qn-api-version": 1 };
  const heads = await provider.send("qn_fetchNFTCollectionDetails", {
    contracts: [
      "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
      "0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7",
    ],
  });
  console.log(heads);
})();
