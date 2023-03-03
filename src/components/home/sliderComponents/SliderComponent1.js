import React from 'react'
import "./SliderComponents.css";

import Jordan1 from '../../../assets/img/jordan1-1.png'
const SliderComponent1 = () => {
  return (
    <div className='w-full h-screen flex' style={{backgroundColor:"#CDDDEE"}}>

        <div className='w-1/2'>
            <img src={Jordan1} className='w-full'></img>
        </div>

        <div className='w-1/2 block'>
            <div className='stroke-text font-bold text-center relative top-1/4 text-white leading-none' style={{fontSize:'6rem'}}>
                NIKE <br />
                BLAZER  
                <h2 className='text-blue-300 text-4xl mt-4'>
                  50% OFF
                </h2>      
            </div>
        </div>

    </div>
  )
}

export default SliderComponent1