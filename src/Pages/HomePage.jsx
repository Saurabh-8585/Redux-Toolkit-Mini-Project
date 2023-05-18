import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'

const HomePage = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const products = await fetch('https://fakestoreapi.com/products');
        const res = await products.json();
        setProduct(res);
    }
    return (
        <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {product.map(prod => <ProductCard product={prod} key={prod.id} />)}
        </div>
    )
}

export default HomePage

