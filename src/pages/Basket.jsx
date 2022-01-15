import BasketItem from "../components/BasketItem"


function Basket(props) {


    function getTotal() {
        let total = 0
        props.cart.map(item => {
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
                        props.cart.map(item =>
                            <BasketItem item={item} cart={props.cart} setCart={props.setCart} />

                        )}
                </ul>

                <h3>Your total: £{getTotal().toFixed(2)}</h3>
            </section>
        </main>

    )
}
export default Basket