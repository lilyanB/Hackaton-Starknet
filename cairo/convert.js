function strToFeltArr(str) {
    const size = Math.ceil(str.length / 31);
    const arr = Array(size);
  
    let offset = 0;
    for (let i = 0; i < size; i++) {
      const substr = str.substring(offset, offset + 31).split("");
      const ss = substr.reduce(
        (memo, c) => memo + c.charCodeAt(0).toString(16),
        ""
      );
      arr[i] = BigInt("0x" + ss);
      offset += 31;
    }
    return arr;
  }

async function main() {
    const baseTokenURI = strToFeltArr("https://gateway.pinata.cloud/ipfs/QmXFR49PKWrECRPvErhreps5nzdeznmCZS6nSG9ZndnDKE/");
    console.log(baseTokenURI);

}

main()
  .then(() => {
    console.log("finished successfully");
    process.exit(0);
  })
  .catch((x) => {
    console.log(`Failed to run: ${x.toString()}`);
    process.exit(1);
  });