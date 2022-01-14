import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ProductDetail() {

    const [item, setItem] = useState(null)
    const product = useParams()


    useEffect(() => {
        fetch(`http://localhost:3000/products/${product.id}`)
            .then(resp => resp.json())
            .then(item => setItem(item))
    }, [])

    if (item === null) {
        return <h1>Loading</h1>
    }

    if (item.id === undefined) {
        return <h1>Not Found</h1>
    }

    return (
        <main>
            <section className="product-detail main-wrapper">
                <img
                    src={item.image}
                    alt={item.title}
                />
                <div className="product-detail__side" style={{ "borderColor": '#f4ae01' }}>
                    <h3></h3>
                    <h2>{item.title}</h2>
                    <p>
                        {item.description}
                    </p>
                    <p>£{item.price}</p>

                    <button>Add to basket</button>
                </div>
            </section>

        </main>

    )
}

export default ProductDetail