import { useEffect } from "react"
import Product from "../components/Product"

function ProductsPage({ items, setItems, search }) {

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(resp => resp.json())
            .then(items => setItems(items))
    }, [])


    let filteredItems = items

    filteredItems = filteredItems.filter(function (item) {
        return item.title.toLowerCase().includes(search.toLowerCase())
    })
    return (

        <main>
            <section className="products-container main-wrapper">
                <ul className="products-container__list">
                    {

                        filteredItems.map(item => (
                            <Product key={item.id} item={item} />
                        ))
                    }


                </ul>
            </section>
        </main>

    )
}

export default ProductsPage