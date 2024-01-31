import React, { useEffect } from 'react'

function Test() {
    useEffect(()=>{
        const myfun = async ()=>{
            try {
                const res = await fetch('https://fakestoreapi.com/products/1')
                const result = await res.json() 
                console.log('json received successfully', result)
            } catch (error) {
                console.log(error.message)
                alert('Error')
            }
        }
        myfun()
    },[])
  return (
    <div>Test</div>
  )
}

export default Test