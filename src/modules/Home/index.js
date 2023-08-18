import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import Products from '../../components/ProductCard'
import Feature from '../../components/FeatureCard'
import Stac from '../../components/Statcard'
import ProductCard from '../../components/ProductCard'
import Categories from '../../components/Categories'

const Home = () => {
  const [ products, setProducts] = useState([]);
  useEffect(() =>{
  const fetchProducts = async () =>{
    const response = await fetch ('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log(data)
    setProducts(data)
  }
  fetchProducts()
  } ,[])
  return (
    <>
    <Hero />
    <Categories />
    <div className='flex flex-col text-center w-full mb'>
    <h2 className="text-xs text-purple-500 tracking-widest font-medium text-center  title-font mb-1">Products</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900">Most Popular Products</h1>
      </div>
      {
        products.length > 0 ?
        <ProductCard products={products} />
        : 
        <div>Loading....</div>
      }
    <Products />
   
    <Stac />
    {/* <Footer /> */}
    </>
  )
}

export default Home