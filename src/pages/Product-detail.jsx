import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


function ProductDetail() {

    const [item, setItem] = useState(null)
    const product = useParams()


    useEffect(() => {
        fetch(`http://localhost:3000/products/${product.id}`)
            .then(resp => resp.json())
            .then(item => setItem(item))
    }, [])


    function addToCart() {
        fetch('http://localhost:3000/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...item, quantity: 1

            })
        }).then(resp => resp.json())
    }
    if (item === null) {
        return <h1>Loading</h1>
    }

    if (item.id === undefined) {
        return <h1 style={{ color: 'red', display: 'grid', placeItems: 'center', height: '100vh' }}>Not Found</h1>
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
                    <Link to={`/basket`}><button onClick={() => addToCart()}>Add to basket</button></Link>
                </div>
            </section>

        </main>

    )
}

export default ProductDetail