from starkware.cairo.common.cairo_builtins import HashBuiltin

func hash2{hash_ptr : HashBuiltin*}(x, y) -> (result : felt):
    hash_ptr.x = x
    hash_ptr.y = y
    let result = hash_ptr.result
    let hash_ptr = hash_ptr + HashBuiltin.SIZE
    return (result=result)
end