import React from 'react'
import "./SliderComponents.css";

import { BsStarFill } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';

import jordan2 from '../../../assets/img/jordan2.png'

const SliderComponent2 = () => {
  return (
    <div className='w-full h-screen flex banner2'>

        <div className='w-fit'>
            <img src={jordan2} className='w-full h-full'></img>
        </div>

        <div className='w-1/3 banner_text'>
            <div className='stroke-text relative top-1/4 text-left'>
              <h3 className='text-lg font-bold text-zinc-300 my-1'>
                240$
              </h3> 
              <h1 className='text-4xl font-bold text-zinc-100 my-2'>
              AIR JORDAN 6 <br/>
              RETRO SP  
              </h1>
              <div className='flex my-2 justify-end text-yellow-400 gap-1'>
                <BsStar/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
              </div>
              <p className='text-zinc-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas purus viverra accumsan in nisl nisi. 
                Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque.
                In egestas erat imperdiet sed euismod nisi porta lorem mollis.
                Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor
                id aliquet lectus proin. Sapien faucibus et molestie ac feugiat
                  
              </p>     
            </div>
        </div>

    </div>
  )
}

export default SliderComponent2