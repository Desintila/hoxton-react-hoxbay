import { useEffect } from "react"
import Product from "../components/Product"

function ProductsPage({ items, setItems }) {

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(resp => resp.json())
            .then(items => setItems(items))
    }, [])


    return (

        <main>
            <section className="products-container main-wrapper">
                <ul className="products-container__list">
                    {

                        items.map(item => (
                            <Product key={item.id} item={item} />
                        ))
                    }


                </ul>
            </section>
        </main>

    )
}

export default ProductsPage