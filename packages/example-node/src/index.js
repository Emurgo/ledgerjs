import TransportNodeHid from "@ledgerhq/hw-transport-node-hid";
import AppAda from "@ledgerhq/hw-app-ada";

async function example() {
  const transport = await TransportNodeHid.create(5000);
  transport.setDebugMode(true);
  const appAda = new AppAda(transport);

  // console.log(
  //   await appAda.getExtendedPublicKey([
  //     0x80000000 + 44,
  //     0x80000000 + 1815,
  //     0x80000000 + 1
  //   ])
  // );

  // console.log(await appAda.getVersion());

  // console.log(
  //   await appAda.attestUtxo(
  //     [
  //       "839f8200d818582482582034bbdf0a10e7290ad22e3ee791b6b3c35c206ab8b5",
  //       "1bb749a2b06489ceebf5f400ff9f8282d818584283581c5f5bee73ed41ff6c84",
  //       "90dfdb4732178e0216ccf7badbe1e77d5d7ff8a101581e581c1e9a0361bdc37d",
  //       "b7ab7ea2a3f187761877f3db11211fc7436131f15e001ab10129441b00000185",
  //       "ae645c2d8282d818584283581cada4052647c47745abfc9e04d7dc5c5c0a8542",
  //       "8f5b741be6687e6005a101581e581cd8669b0c1a9f2fccb28d3ef58ef8efad73",
  //       "aead7117b6559a5f857813001acdb5f5841a1633e6208282d818584283581c65",
  //       "32caadc0b498be1813d12f33bf81d68d5662255cc640b881a29315a101581e58",
  //       "1cca3e553c9c63c580936df7433aac461e4efb6ce966206e083af22d0e001a9c",
  //       "7427f71a19cf10348282d818584283581c6fd85cfe0ae8c346552717424229d5",
  //       "ac928e72b0cbd5587a5d9bd8e5a101581e581c2b0b011ba3683d2eb420332a08",
  //       "4fe7ecbdefa204c415cd7aa17e216d001a1c29005f1ac38bbcf88282d8185842",
  //       "83581c431923e34d95851fba3c88e99d9d366eb1d595e5436c68da1b4699a5a1",
  //       "01581e581c3054e511bd5acd29e7540b417600367915afa6f95b1a40246aa4fc",
  //       "9f001af7fec6a71a794fa104ffa0"
  //     ].join(""),
  //     3
  //   )
  // );

  // console.log(
  //   await appAda.getExtendedPublicKey([
  //     0x80000000 + 44,
  //     0x80000000 + 1815,
  //     0x80000000 + 1
  //   ])
  // );

  console.log(appAda.runTests());
}

example();
