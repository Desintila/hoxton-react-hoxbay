import { Link } from "react-router-dom"

function Product(props) {
    return (
        <li key={props.item.id}>
            <Link to={`/products/${props.item.id}`}
            ><article className="product-item">
                    <img
                        src={props.item.image}
                        alt={props.item.title}
                    />
                    <h3>{props.item.title}</h3>
                </article></Link
            >
        </li>
    )
}
export default Product