## Installation

### First time?

Go to this [website](https://starknet.io/docs/quickstart.html#quickstart) to configur your machine


### Set up the project
Clone the repository

```bash
git clone git@github.com:OpenZeppelin/cairo-contracts.git
```

`cd` into it and create a Python virtual environment:

```bash
cd cairo-contracts
python3 -m venv env
source env/bin/activate
```

Install the [Nile](https://github.com/OpenZeppelin/nile) dev environment and then run `install` to get [the Cairo language](https://www.cairo-lang.org/docs/quickstart.html), a [local network](https://github.com/Shard-Labs/starknet-devnet/), and a [testing framework](https://docs.pytest.org/en/6.2.x/).
```bash
pip install cairo-nile
nile install
```

## Usage

### Compile the contracts
```bash
nile compile

🤖 Compiling all Cairo contracts in the contracts directory
🔨 Compiling contracts/IAccount.cairo
🔨 Compiling contracts/Account.cairo
🔨 Compiling contracts/AddressRegistry.cairo
🔨 Compiling contracts/Initializable.cairo
🔨 Compiling contracts/Ownable.cairo
🔨 Compiling contracts/token/ERC721.cairo
🔨 Compiling contracts/token/ERC20.cairo
🔨 Compiling contracts/token/IERC20.cairo
✅ Done
```

### Run tests

```bash
pytest

====================== test session starts ======================
platform linux -- Python 3.7.2, pytest-6.2.5, py-1.11.0, pluggy-1.0.0
rootdir: /home/readme/cairo-contracts
plugins: asyncio-0.16.0, web3-5.24.0, typeguard-2.13.0
collected 19 items                                                                                               

tests/test_Account.py ....                                 [ 21%]
tests/test_AddressRegistry.py ..                           [ 31%]
tests/test_ERC20.py ..........                             [ 84%]
tests/test_Initializable.py .                              [ 89%]
tests/test_Ownable.py ..                                   [100%]
```

## Learn

### Contract documentation
* [Account](docs/Account.md)
* [ERC20](docs/ERC20.md)
* [ERC721](docs/ERC721.md)
* [Contract extensibility pattern](docs/Extensibility.md)
* [Utilities](docs/Utilities.md)
### Cairo
* [StarkNet official documentation](https://www.cairo-lang.org/docs/hello_starknet/index.html#hello-starknet)
* [Cairo language documentation](https://www.cairo-lang.org/docs/hello_cairo/index.html#hello-cairo)
* Perama's [Cairo by example](https://perama-v.github.io/cairo/by-example/)
* [Cairo 101 workshops](https://www.youtube.com/playlist?list=PLcIyXLwiPilV5RBZj43AX1FY4FJMWHFTY)
### Nile
* [Getting started with StarkNet using Nile](https://medium.com/coinmonks/starknet-tutorial-for-beginners-using-nile-6af9c2270c15)
* [How to manage smart contract deployments with Nile](https://medium.com/@martriay/manage-your-starknet-deployments-with-nile-%EF%B8%8F-e849d40546dd)

## Security

This project is still in a very early and experimental phase. It has never been audited nor thoroughly reviewed for security vulnerabilities. Do not use in production.

Please report any security issues you find to security@openzeppelin.org.

## License

OpenZeppelin Cairo Contracts is released under the [MIT License](LICENSE).



# play

## Game 1

look at the statement on our site then give the answer to the "submit_answer" function

## Game 2

When you use ArgentX to run the "submit_answer" function, you can see error_message with the explanation. The real answer is inside this error.

## Game 3

You will use [Voyager](https://goerli.voyager.online/) to see functions and interact with them
Activate "get_nft_contract_addr" to see the answers of response.

## Game 4

You will use [Voyager](https://goerli.voyager.online/) to see functions and interact with them
use the functions to modify your variable.

#NFT

All games give you an NFT on your ArgentX wallet
We use Pinata to save NFT with their metada

JSON : https://gateway.pinata.cloud/ipfs/QmXFR49PKWrECRPvErhreps5nzdeznmCZS6nSG9ZndnDKE

PNG : https://gateway.pinata.cloud/ipfs/QmRofmXeHcdQjCNfTcCNt9nuYLsFFYk7ief9cjiqkA5PHp

https://gateway.pinata.cloud/ipfs/QmXFR49PKWrECRPvErhreps5nzdeznmCZS6nSG9ZndnDKE/

convert to :

[
  184555836509371486644298270517380613565396767415278678887948391494588524912n,
  181013377130046948833909150447640617212512516586008272505834082728746312805n,
  2730310445978494220010408865459748004030006575n
]