%lang starknet

from starkware.cairo.common.cairo_builtins import HashBuiltin
from starkware.cairo.common.uint256 import Uint256
from starkware.starknet.common.syscalls import get_caller_address
from starkware.cairo.common.bool import TRUE

# from openzeppelin.token.erc20.library import ERC20
from openzeppelin.access.ownable import Ownable

from utils.hash import hash2

#
# Declaring storage vars
# Storage vars are by default not visible through the ABI. They are similar to "private" variables in Solidity
#

@storage_var
func game_secret_value() -> (game_secret_value : felt):
end

@storage_var
func NFT_contract() -> (NFT_contract : felt):
end

@constructor
func constructor{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}(
    name : felt, symbol : felt, decimals : felt, owner : felt
):
    # ERC20.initializer(name, symbol, decimals)
    Ownable.initializer(owner)
    return ()
end

#
# interfaces
#

@contract_interface
namespace ERC721:
    func mint(to : felt, tokenId : Uint256):
    end
end

#
# Getters
#

# @view
# func name{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}() -> (name : felt):
#     let (name) = ERC20.name()
#     return (name)
# end

# @view
# func symbol{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}() -> (symbol : felt):
#     let (symbol) = ERC20.symbol()
#     return (symbol)
# end

#
# Externals
#

@external
func verify_game{pedersen_ptr : HashBuiltin*, syscall_ptr : felt*, range_check_ptr}(
    my_value : felt
):
    let (secret_value) = game_secret_value.read()
    let (my_value_hash) = hash2{hash_ptr=pedersen_ptr}(my_value, 0)
    let (caller_address) = get_caller_address()
    let (nft_contract_address) = NFT_contract.read()
    # Checking that the value sent is correct
    # Using assert this way is similar to using "require" in Solidity
    with_attr error_message("Wrong secret value"):
        assert my_value_hash = secret_value
    end

    ERC721.mint(contract_address=nft_contract_address, to=caller_address, tokenId=Uint256(1, 0))  # a voir pour le tokenID

    return ()
end

@external
func set_game_secret_value{pedersen_ptr : HashBuiltin*, syscall_ptr : felt*, range_check_ptr}(
    my_value : felt
):
    Ownable.assert_only_owner()
    let (my_value_hash) = hash2{hash_ptr=pedersen_ptr}(my_value, 0)
    game_secret_value.write(my_value_hash)
    return ()
end

@external
func set_NFT_adress{pedersen_ptr : HashBuiltin*, syscall_ptr : felt*, range_check_ptr}(
    my_value : felt
):
    Ownable.assert_only_owner()
    NFT_contract.write(my_value)
    return ()
end
