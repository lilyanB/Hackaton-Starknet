%lang starknet

@contract_interface
namespace IBalanceContract:
    func increase_balance(amount : felt):
    end

    func get_balance() -> (res : felt):
    end
end

@external
func call_increase_balance{syscall_ptr : felt*, range_check_ptr}(
    contract_address : felt, amount : felt
):
    IBalanceContract.increase_balance(contract_address=contract_address, amount=amount)
    return ()
end

@view
func call_get_balance{syscall_ptr : felt*, range_check_ptr}(contract_address : felt) -> (
    res : felt
):
    let (res) = IBalanceContract.get_balance(contract_address=contract_address)
    return (res=res)
end
