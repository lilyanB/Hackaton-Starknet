# SPDX-License-Identifier: MIT
# OpenZeppelin Contracts for Cairo v0.2.0 (token/erc721_enumerable/ERC721_Enumerable_Mintable_Burnable.cairo)

%lang starknet

from starkware.cairo.common.cairo_builtins import HashBuiltin, SignatureBuiltin
from starkware.cairo.common.uint256 import Uint256

from openzeppelin.token.erc721.library import ERC721
from openzeppelin.token.erc721_enumerable.library import ERC721_Enumerable
from openzeppelin.introspection.ERC165 import ERC165
from openzeppelin.access.ownable import Ownable

#
# Constructor
#
@storage_var
func key()->(key : felt):
end


@constructor
func constructor{
        syscall_ptr : felt*,
        pedersen_ptr : HashBuiltin*,
        range_check_ptr
    }(
        name: felt,
        symbol: felt,
        owner: felt
    ):
    ERC721.initializer(name, symbol)
    ERC721_Enumerable.initializer()
    Ownable.initializer(owner)
    return ()
end

@external
func create_key{
        syscall_ptr : felt*,
        pedersen_ptr : HashBuiltin*,
        range_check_ptr
    }(key : felt):
key.write(1)
end

@external 
func mint{
        pedersen_ptr: HashBuiltin*,
        syscall_ptr: felt*,
        range_check_ptr
    }(to: felt, tokenId: Uint256,key : felt ):
    # Ownable.assert_only_owner()
    assert(key = key.read())
    ERC721_Enumerable._mint(to, tokenId)
    return ()
end