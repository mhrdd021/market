import React from 'react'
import "./SliderComponents.css";
import jordan3 from '../../../assets/img/jordan3.png'

const SliderComponent3 = () => {
  return (
    <div className='w-full h-screen flex banner3 bg-red-400'>

    <div className='w-1/3 banner_text'>
        <div className='stroke-text font-bold text-center relative top-1/4 text-white' style={{fontSize:'6rem'}}>
            NIKE <br />
            BLAZER        
        </div>
    </div>

    <div className='w-fit'>
        <img src={jordan3} className='w-full mt-8'></img>
    </div>

</div>
  )
}

export default SliderComponent3