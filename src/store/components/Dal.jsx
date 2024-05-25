import React from 'react'
import { dalData } from '../data/dal'

export const Dal = () => {

  const FirstFourImages = dalData.slice(0,4)

  return (
    <div>
        <div className='proTitle'><h2>Dal</h2></div>
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
