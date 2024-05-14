import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";



const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative'>

        <div className="relative md:absolute md:top-[-7rem] z-[10] mx-auto ">
            <img className='aspect-square rounded-full object-cover w-[140px] h-[140px] z-40 sticky'
             src={`${process.env.PUBLIC_URL} ${review.image}`} alt="None" />
             <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute
             top-[-6px] z-[-5] left-[10px] ' ></div>
        </div>

        <div className=' text-center mt-7' >
            <p className='font-bold text-lg capitalize  md:text-2xl tracking-wider '>{review.name}</p>
            <p className='text-violet-300 uppercase text-sm' >{review.job}</p>

        </div>


        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft/>
        </div>

        <div className='text-center text-slate-500 mt-4 '>
            {review.text}
        </div>

        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteRight/>
        </div>


    </div>

  )
}

export default Card;
