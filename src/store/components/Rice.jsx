import React from 'react'
import { riceData } from '../data/rice'

export const Rice = () => { 

  const FirstFourImages = riceData.slice(0,4)

  return (
    <div>
       <div className='proTitle'><h2>Rice</h2></div>
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
