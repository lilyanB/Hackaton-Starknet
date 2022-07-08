# SPDX-License-Identifier: MIT
# OpenZeppelin Cairo Contracts v0.1.0 (token/erc20/ERC20_Pausable.cairo)

%lang starknet

from starkware.cairo.common.cairo_builtins import HashBuiltin
from starkware.cairo.common.uint256 import Uint256

from openzeppelin.token.erc20.library import (
    ERC20_name,
    ERC20_symbol,
    ERC20_decimals,
    ERC20_balanceOf,
    ERC20_allowance,

    ERC20_initializer
)

from openzeppelin.access.ownable import (
    Ownable_initializer,
    Ownable_only_owner
)

from openzeppelin.utils.constants import TRUE

from openzeppelin.utils.hash import hash2

#
# Declaring storage vars
# Storage vars are by default not visible through the ABI. They are similar to "private" variables in Solidity
#

@storage_var
func my_secret_value() -> (my_secret_value : felt):
end

@storage_var
func NFT_contract() -> (NFT_contract : felt):
end

@constructor
func constructor{
        syscall_ptr: felt*,
        pedersen_ptr: HashBuiltin*,
        range_check_ptr
    }(
        name: felt,
        symbol: felt,
        decimals: felt,
        owner: felt
    ):
    ERC20_initializer(name, symbol, decimals)
    Ownable_initializer(owner)
    return ()
end


#
# interfaces
#

@contract_interface
namespace ERC721:
    func mint(to: felt, tokenId: Uint256):
    end
end


#
# Getters
#

@view
func name{
        syscall_ptr : felt*,
        pedersen_ptr : HashBuiltin*,
        range_check_ptr
    }() -> (name: felt):
    let (name) = ERC20_name()
    return (name)
end

@view
func symbol{
        syscall_ptr : felt*,
        pedersen_ptr : HashBuiltin*,
        range_check_ptr
    }() -> (symbol: felt):
    let (symbol) = ERC20_symbol()
    return (symbol)
end

#
# Externals
#

@external
func exo1{
        pedersen_ptr : HashBuiltin*,
        syscall_ptr: felt*,
        range_check_ptr
    }(my_value : felt):

    let(secret_value) = my_secret_value.read()
    let (my_value_hash) = hash2{hash_ptr=pedersen_ptr}(my_value, 0)

    # Checking that the value sent is correct
    # Using assert this way is similar to using "require" in Solidity
    with_attr error_message("Wrong secret value"):
        assert my_value_hash = secret_value
    end

    ERC721.mint(
        contract_address=NFT_contract, to=amount, tokenId=1
    )

    return ()
end

@external
func exo1_secret_value{
        pedersen_ptr : HashBuiltin*,
        syscall_ptr: felt*,
        range_check_ptr
    }(my_value : felt):
    Ownable_only_owner()
    let (my_value_hash) = hash2{hash_ptr=pedersen_ptr}(my_value, 0)
    my_secret_value.write(my_value_hash)
    return ()
end

@external
func setup_NFT_contract{
        pedersen_ptr : HashBuiltin*,
        syscall_ptr: felt*,
        range_check_ptr
    }(my_value : felt):
    Ownable_only_owner()
    NFT_contract.write(my_value)
    return ()
end