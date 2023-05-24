import React from 'react'
import { add, remove } from '../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist, removeFromWishlist } from '../store/wishlistSlice';
const ProductCard = ({ product }) => {

    const cartItems = useSelector((state) => state.cart);
    const wishlistItems = useSelector((state) => state.wishlist)

    const dispatch = useDispatch();

    const inCart = cartItems.some(pr => pr.id === product.id);
    const inWishlist = wishlistItems.some(pr => pr.id === product.id);


    const CartButton = inCart ?
        <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={() => dispatch(remove(product.id))}>
            <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 1a9 9 0 110 18A9 9 0 0110 1zm5 10a1 1 0 01-2 0V9a1 1 0 112 0v2zM7 9a1 1 0 112 0v2a1 1 0 11-2 0V9zm3-7a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" clipRule="evenodd" />
            </svg>
            Remove 
        </button>
        :
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => dispatch(add(product))}>
            <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
            Buy now
        </button>
    const WishlistButton = inWishlist ?
        <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={() => dispatch(removeFromWishlist(product.id))}>
            <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 1a9 9 0 110 18A9 9 0 0110 1zm5 10a1 1 0 01-2 0V9a1 1 0 112 0v2zM7 9a1 1 0 112 0v2a1 1 0 11-2 0V9zm3-7a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z" clipRule="evenodd" />
            </svg>
            Remove
        </button>
        :
        <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" onClick={() => dispatch(addToWishlist(product))}>
            <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
            Wishlist +
        </button>


    return (
        <div className="rounded-xl overflow-hidden shadow-lg border py-5 mt-4">
            <img className="w-52     m-auto object-contain h-64" src={product.image} alt="Mountain" />
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded  dark:bg-gray-700"></hr>

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title.slice(0, 20)}...</div>
                <p className="text-gray-700 text-base">
                    {product.description.slice(0, 90)}...
                </p>
            </div>
            <div className=" pt-4 pb-2 flex justify-around  items-center">
                <span className='text-blue-500 font-bold'> ${product.price}</span>
                <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-1  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ">
                    {product.rating.rate}⭐</button>
                <span className="bg-blue-100 rounded-full px-3  text-sm font-semibold text-gray-700 py-2 mr-2">#{product.category}</span>

            </div>

            <div className="flex justify-around my-2 items-center">
                {CartButton}
                {WishlistButton}
            </div>
        </div>

    )
}

export default ProductCard