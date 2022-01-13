import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function ProductsPage() {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(resp => resp.json())
            .then(items => setItems(items))
    }, [])

    console.log(items)

    return (
        <main>
            <section className="products-container main-wrapper">
                <ul className="products-container__list">
                    {
                        items.map(item => (
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
                        ))
                    }


                </ul>
            </section>
        </main>

    )
}

export default ProductsPage