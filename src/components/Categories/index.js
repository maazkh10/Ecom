import React, { useEffect, useState } from 'react'

import FeatureCard from '../FeatureCard';

const Categories =()=> {
    const [ categories, setcategories] = useState([]);
    useEffect(() =>{
    const fetchCategories = async () =>{
      const response = await fetch ('https://fakestoreapi.com/products/categories')
      const data = await response.json()
      console.log(data, 'data')
      setcategories(data)
    }
    fetchCategories()
    } ,[])
   
    if (categories.length === 0) return <div>Loading....</div>
  
    return (
        <FeatureCard cards={categories } />     
    )
}

export default Categories