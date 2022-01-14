import { useEffect } from "react"
import Product from "../components/Product"

function ProductsPage(props) {

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(resp => resp.json())
            .then(items => props.setItems(items))
    }, [])


    return (

        <main>
            <section className="products-container main-wrapper">
                <ul className="products-container__list">
                    {

                        props.items.map(item => (
                            <Product item={item} />
                        ))
                    }


                </ul>
            </section>
        </main>

    )
}

export default ProductsPage