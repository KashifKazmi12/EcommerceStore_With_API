import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'
import loadingImg from '../images/loading.svg'

export const Products = (props) => {
    let [productsList, setProductList] = useState([])
    let [error, setError] = useState(false)
    let [loading, setLoading] = useState(true)

    useEffect(()=>{
           if(props.limit){
            fetch(`https://fakestoreapi.com/products/category/women's clothing?limit=${props.limit}&sort=desc`)
            .then(res=>res.json())
            .then(json=>{setLoading(false); setProductList(json)}).catch(
                (error)=>{
                    setLoading(false);
                    console.log('Error: ', error);
                    setError(true)
                }
            )
        }
        else if(props.category)
        {
            fetch(`https://fakestoreapi.com/products/category/${props.category}`)
            .then(res=>res.json())
            .then(json=>{setLoading(false); setProductList(json)}).catch(
                (error)=>{
                    setLoading(false);
                    console.log('Error: ', error);
                    setError(true)
                }
            )
        }
        else{
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{setLoading(false); setProductList(json);}).catch(
                (error)=>{
                    setLoading(false);
                    console.log('Error: ', error);
                    setError(true)
                }
            )
        }
        
    },[props.limit, props.category])
    return (
        <>{loading && <div className="flex justify-center align-middle"><img src={loadingImg} alt='loading'/></div>}
        {error && "Error in fetching products"}
        <section id="Projects"
            className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-5 mt-10 mb-24">
            {
                productsList && productsList.map((product)=>{
                    return  <ProductCard key={product.id} product={product}/>
                })
            }

        </section>
        </>
        // <!-- 🛑 Grid Section - Ends Here -->
    )
}
