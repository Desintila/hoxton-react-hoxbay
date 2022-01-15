import { Link } from "react-router-dom"

function BasketItem(props) {


    function getItemTotal(item) {
        let total = 0
        total += item.quantity * item.price
        return total
    }


    function changeQuantity(event, item) {
        let updatedItems = [...props.cart]
        item.quantity = event.target.value
        if (item.quantity <= 0) (
            updatedItems = updatedItems.filter(product => product.id !== item.id)
        )
        props.setCart(updatedItems)
    }


    return (
        <li>
            <article className="basket-container__item">
                <Link to={`/products/${props.item.id}`} ><img
                    src={props.item.image}
                    alt={props.item.title}
                    width="90"
                /></Link>
                <p>{props.item.title}</p>
                <p>
                    Qty:
                    <select value={props.item.quantity} onChange={(event) => changeQuantity(event, props.item)}
                    ><option value="0" >0</option
                    ><option value="1">1</option
                    ><option value="2">2</option
                    ><option value="3">3</option></select
                    >
                </p>

                <p>Item total: £{getItemTotal(props.item).toFixed(2)}</p>
            </article>
        </li>
    )
}

export default BasketItem