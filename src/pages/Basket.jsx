import { useEffect, useState } from "react"
import BasketItem from "../components/BasketItem"


function Basket() {
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/cart')
            .then(resp => resp.json())
            .then(cartFromServer => setCart(cartFromServer))
    }, [])
    function getTotal() {
        let total = 0
        cart.map(item => {
            total += item.quantity * item.price
        })
        return total
    }

    return (

        <main>
            <section className="basket-container">
                <h2>Your Basket</h2>
                <ul>
                    {
                        cart.map(item =>
                            <BasketItem key={item.title} item={item} cart={cart} setCart={setCart} />

                        )}
                </ul>

                <h3>Your total: £{getTotal().toFixed(2)}</h3>
            </section>
        </main>

    )
}
export default Basket