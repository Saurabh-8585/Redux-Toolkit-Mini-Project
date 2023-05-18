import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'

const Cart = () => {
    const cartProducts = useSelector((state) => state.cart)
    return (
        <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {cartProducts.map(prod => <ProductCard product={prod} key={prod.id} />)}
    </div>
    )
}

export default Cart