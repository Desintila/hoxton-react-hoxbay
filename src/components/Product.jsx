import { Link } from "react-router-dom"

function Product({ item }) {
    return (
        <li key={item.id}>
            <Link to={`/products/${item.id}`}
            ><article className="product-item">
                    <img
                        src={item.image}
                        alt={item.title}
                    />
                    <h3>{item.title}</h3>
                </article></Link
            >
        </li>
    )
}
export default Product