%lang starknet

from starkware.cairo.common.cairo_builtins import HashBuiltin
from starkware.cairo.common.uint256 import Uint256
from starkware.starknet.common.syscalls import get_caller_address
from starkware.cairo.common.bool import TRUE

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
func nft_contract_addr() -> (nft_contract_addr : felt):
end

@constructor
func constructor{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}(owner : felt):
    Ownable.initializer(owner)
    return ()
end

#
# interfaces
#

@contract_interface
namespace ERC721:
    func mint(to : felt):
    end

    func setTokenURI(tokenURI_len : felt, tokenURI : felt*) -> ():
    end
end

#
# Getters
#

@view
func get_nft_contract_addr{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}() -> (
    nft_contract_addr : felt
):
    let (contract_addr) = nft_contract_addr.read()
    return (contract_addr)
end

#
# Externals
#

@external
func submit_answer{pedersen_ptr : HashBuiltin*, syscall_ptr : felt*, range_check_ptr}(
    answer : felt
):
    let (secret_value) = game_secret_value.read()
    let (answer_hash) = hash2{hash_ptr=pedersen_ptr}(answer, 0)
    let (caller_address) = get_caller_address()
    let (contract_address) = nft_contract_addr.read()
    # Checking that the value sent is correct
    # Using assert this way is similar to using "require" in Solidity
    with_attr error_message("Wrong secret value"):
        assert answer_hash = secret_value
    end

    ERC721.mint(contract_address=contract_address, to=caller_address)  # a voir pour le tokenID

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
func set_nft_adress{pedersen_ptr : HashBuiltin*, syscall_ptr : felt*, range_check_ptr}(
    address : felt
):
    Ownable.assert_only_owner()
    nft_contract_addr.write(address)
    return ()
end

@external
func setTokenURI{pedersen_ptr : HashBuiltin*, syscall_ptr : felt*, range_check_ptr}(
    tokenURI_len : felt, tokenURI : felt*
):
    alloc_locals
    Ownable.assert_only_owner()
    let (contract_address) = nft_contract_addr.read()
    ERC721.setTokenURI(
        contract_address=contract_address, tokenURI_len=tokenURI_len, tokenURI=tokenURI
    )
    return ()
end
