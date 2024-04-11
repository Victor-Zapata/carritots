import type { CartItem } from "../types/types"

type CartitemProps = {
    item: CartItem
    handleIncrement: (item: CartItem) => void
    handleDecrement: (item: CartItem) => void
    deleteGuitar: (guitar: CartItem) => void
}

const Cartitem = ({ item, handleIncrement, handleDecrement, deleteGuitar } : CartitemProps) => {
    const { image, price, name, quantity } = item
    return (
        <tr>
            <td>
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
            </td>
            <td>{name}</td>
            <td className="fw-bold">
                $ {price}
            </td>
            <td className="flex align-items-start gap-4">
                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => handleDecrement(item)}
                >
                    -
                </button>
                {quantity}
                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => handleIncrement(item)}
                >
                    +
                </button>
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => deleteGuitar(item)}
                >
                    X
                </button>
            </td>
        </tr>
    )
}

export default Cartitem