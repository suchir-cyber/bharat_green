// import React from 'react'
// import { dalData } from '../data/dal'
// import { Navbar } from '../components/Navbar'

// export const DalPage = () => {
//   return (
//     <div>
//        <Navbar />
//        <div className='pageSection'>
//          {dalData.map((item) =>{
//             return(
//               <div>
//                 <div className='pageImg'>
//                   <img src = {item.image} alt = 'dal'/>
//                 </div>
//                 <div className='proModel'>
//                     {item.product}
//                 </div>
//               </div>
//             )
//          })}
//     </div>
//     </div>
//   )
// }

import React, { useState } from 'react';
import { dalData } from '../data/dal';
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router-dom';

const priceRanges = [
  { label: 'Below $300', min: 0, max: 299 },
  { label: '$300 - $600', min: 300, max: 600 },
  { label: '$600 - $900', min: 601, max: 900 },
  { label: 'Above $900', min: 901, max: Infinity }
];

export const DalPage = () => {
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  const priceRangeHandler = (rangeLabel) => {
    if (selectedPriceRanges.includes(rangeLabel)) {
      setSelectedPriceRanges(selectedPriceRanges.filter(label => label !== rangeLabel));
    } else {
      setSelectedPriceRanges([...selectedPriceRanges, rangeLabel]);
    }
  };

  const filterRices = () => {
    if (selectedPriceRanges.length === 0) return dalData;

    return dalData.filter(phone => {
      return selectedPriceRanges.some(rangeLabel => {
        const range = priceRanges.find(r => r.label === rangeLabel);
        return phone.price >= range.min && phone.price <= range.max;
      });
    });
  };

  const filteredProduct = filterRices();

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {priceRanges.map((range) => (
            <div className='pro-input' key={range.label}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedPriceRanges.includes(range.label)}
                  onChange={() => priceRangeHandler(range.label)}
                />
                {range.label}
              </label>
            </div>
          ))}
        </div>

        <div className='pageSection'>
          {filteredProduct.map((item) => (
            <div key={item.id}>
              <Link to={`/Dal/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt={item.model} />
                </div>
              </Link>
              <div className="proModel">
                {item.company}, {item.model}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
