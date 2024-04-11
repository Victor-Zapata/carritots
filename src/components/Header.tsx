import type { CartItem } from "../types/types";
import Cartitem from "./Cartitem";

type HeaderProps = {
    cart: CartItem[]
    handleIncrement: (item: CartItem) => void
    handleDecrement: (item: CartItem) => void
    deleteGuitar: (guitar: CartItem) => void
    deleteCart: () => void
    totalPrice: number
}

const Header = ({ cart, deleteCart, handleIncrement, handleDecrement, totalPrice, deleteGuitar }: HeaderProps) => {

    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div
                            className="carrito"
                        >
                            <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

                            <div id="carrito" className="bg-white p-3">
                                {
                                    cart.length == 0 ? <p className="text-center">El carrito esta vacio</p> : <><table className="w-100 table">
                                        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                cart.map((item) => {
                                                    return <Cartitem key={item.id} item={item} handleIncrement={handleIncrement} handleDecrement={handleDecrement} deleteGuitar={deleteGuitar} />
                                                })
                                            }
                                        </tbody>
                                    </table>
                                        <p className="text-end">Total pagar: <span className="fw-bold">${totalPrice}</span></p>
                                        <button
                                            className="btn btn-dark w-100 mt-3 p-2"
                                            onClick={deleteCart}
                                        >Vaciar Carrito</button> </>

                                }



                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header