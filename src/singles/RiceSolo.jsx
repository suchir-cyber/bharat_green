import React from 'react'
import { riceData } from '../store/data/rice'
import { useParams } from 'react-router-dom'
import { Navbar } from '../store/components/Navbar'

export const RiceSolo = () => {
  const {id} = useParams()
  const Product = riceData.find((item) => item.id === id)
  return (
    <div>
       <Navbar />
       <div className='ind-section'>
      <div className='ind-image'>
        <img src={Product.image} alt="" />
      </div>
      <div className='ind-details space'>
      <div className='ind-product'>
        <h3>{Product.product}</h3>
      </div>
      <div className='ind-price'>
        <h2>{Product.price}</h2>
      </div>
      <div className='ind-description'>
        <h3>{Product.description}</h3>
      </div>
      <button>Add to Cart</button>
      </div>
    </div>
    </div>
  )
}
