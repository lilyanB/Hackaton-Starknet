import pytest
import asyncio
from starkware.crypto.signature.signature import (
    pedersen_hash,
    private_to_stark_key,
    sign,
)
from starkware.starknet.testing.starknet import Starknet
from starkware.starkware_utils.error_handling import StarkException
from utils import (
    Signer, str_to_felt, ZERO_ADDRESS, TRUE, FALSE, assert_revert, assert_event_emitted,
    get_contract_def, cached_contract, to_uint, sub_uint, add_uint, felt_array_to_str,
    str_to_felt_array, from_uint
)


# Some mock keypairs to test with
some_name = 123
some_symbol = 1234
some_owner_secret = 12345
some_owner = private_to_stark_key(some_owner_secret)
tokenURI_felt_array = str_to_felt_array(
    "https://testnet.playoasis.xyz/longurl/0x123456/tokenuri/")
some_tokenURI_len = len(tokenURI_felt_array)
some_tokenURI = tokenURI_felt_array


@pytest.fixture(scope="module")
def event_loop():
    return asyncio.new_event_loop()


# Reusable local network & contract to save testing time
@pytest.fixture(scope="module")
async def contract_factory():
    starknet = await Starknet.empty()
    contract = await starknet.deploy(
        "contracts/ERC721_Mintable_Burnable_LongTokenURIv0.2.cairo",
        constructor_calldata=[
            some_name,
            some_symbol,
            some_owner,
            some_tokenURI_len,
            some_tokenURI,
        ])
    return starknet, contract

# The testing library uses python's asyncio. So the following
# decorator and the ``async`` keyword are needed.


@pytest.mark.asyncio
async def test_register_vehicle(contract_factory):
    """Should register a vehicle to a given public key"""
    _, contract = contract_factory

    # await contract.register_vehicle(
    #     name=some_name,
    #     symbol=some_symbol,
    #     owner=some_owner,
    #     tokenURI_len=some_tokenURI_len,
    #     *tokenURI_felt_array,
    # ).invoke()

    # Check the owner is registered
    name = await contract.get_name().call()
    assert name.result == (some_name,)
