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
func value(account : felt) -> (value : felt):
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

@view
func user_counters{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}(
    account : felt
) -> (value_counter : felt):
    let (value_counter) = value.read(account)
    return (value_counter)
end

#
# Externals
#

@external
func submit_answer{pedersen_ptr : HashBuiltin*, syscall_ptr : felt*, range_check_ptr}():

    let (sender_address) = get_caller_address()
    let (current_value) = value.read(sender_address)
    # Checking that the value sent is correct
    # Using assert this way is similar to using "require" in Solidity
    with_attr error_message("Wrong adress value"):
        assert current_value = 10
    end

    ERC721.mint(contract_address=contract_address, to=caller_address)  # a voir pour le tokenID

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

@external
func reset_value{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}():
    let (sender_address) = get_caller_address()
    value.write(sender_address, 0)
    return ()
end

@external
func increment_value{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}():
    let (sender_address) = get_caller_address()
    let (current_value) = value.read(sender_address)
    value.write(sender_address, current_value + 3)
    return ()
end

@external
func decrement_value{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}():
    let (sender_address) = get_caller_address()
    let (current_value) = value.read(sender_address)
    value.write(sender_address, current_value - 1)
    return ()
end
