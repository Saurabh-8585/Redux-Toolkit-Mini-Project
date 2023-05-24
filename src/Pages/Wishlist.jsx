import React from 'react'
import ProductCard from '../Components/ProductCard'
import { useSelector } from 'react-redux'

const Wishlist = () => {
  const wishlistProducts = useSelector((state) => state.wishlist)
  return (
      <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
      {wishlistProducts.map(prod => <ProductCard product={prod} key={prod.id} />)}
  </div>
  )
}

export default Wishlist