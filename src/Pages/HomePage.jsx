import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { STATUSES, fetchProducts } from '../store/productSlice'

const HomePage = () => {
    const dispatch = useDispatch();
    const { data, status } = useSelector((state) => state.product)
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
   
    return (
        <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'>
            {status === STATUSES.LOADING && <h1 className='text-center mt-10 font-bold'>Loading......</h1>}
            {status === STATUSES.ERROR && <h1 className='text-center mt-10 font-bold'>Something went wrong</h1>}
            {data.map(prod => <ProductCard product={prod} key={prod.id} />)}
        </div>
    )
}

export default HomePage

