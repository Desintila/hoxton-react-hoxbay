import { Link } from "react-router-dom"

function BasketItem({ item, cart, setCart }) {


    function getItemTotal(item) {
        let total = 0
        total += item.quantity * item.price
        return total
    }
    function updateQuantity(item) {
        fetch(`http://localhost:3000/cart/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then(resp => resp.json())
    }

    function changeQuantity(event, item) {
        let updatedItems = [...cart]
        item.quantity = event.target.value
        updateQuantity(item)
        if (item.quantity <= 0) {
            deleteProduct(item.id)
            updatedItems = updatedItems.filter(product => product.id !== item.id)
        }


        setCart(updatedItems)
    }
    function deleteProduct(id) {
        fetch(`http://localhost:3000/cart/${id}`, {
            method: 'DELETE'
        }).then(resp => resp.json())
    }


    return (
        <li >
            <article className="basket-container__item">
                <Link to={`/products/${item.id}`} ><img
                    src={item.image}
                    alt={item.title}
                    width="90"
                /></Link>
                <p>{item.title}</p>
                <p>
                    Qty:
                    <select defaultValue={item.quantity} onChange={(event) => changeQuantity(event, item)}
                    ><option value="0" >0</option
                    ><option value="1">1</option
                    ><option value="2">2</option
                    ><option value="3">3</option></select
                    >
                </p>

                <p>Item total: £{getItemTotal(item).toFixed(2)}</p>
            </article>
        </li>
    )
}

export default BasketItem