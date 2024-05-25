import React from 'react'
import { spiceData } from '../data/spices'

export const Spices = () => {

  const FirstFourImages = spiceData.slice(0,4)
    
  return (
    <div>
        <div className='proTitle'><h2>Spices</h2></div>
        <div className='proSection'>
        {
        FirstFourImages.map((item)=> {
            return (
                <div className='imgBox'>
                    <img className='proImage' src={item.image} alt='rice'/>
                </div>
            )
        })
        }
       </div>
    </div>
  )
}
