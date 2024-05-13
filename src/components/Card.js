import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";



const Card = (props) => {
    let review = props.review;
  return (
    <div>
        <div className=' rounded-full object-cover w-[140px] h-[140px] z-40 sticky  '>
            <img src={`${process.env.PUBLIC_URL} ${review.image}`} alt="None" />
        </div>

        <div className='font-bold text-lg md:text-2xl tracking-wider capitalize flex mx-auto justify-center' >
            <p>{review.name}</p>
        </div>

        <div className='text-violet-300 uppercase text-sm flex mx-auto justify-center' >
            <p>{review.job}</p>
        </div>

        <div className='text-[#a78bfa] flex mx-auto justify-center'>
            <FaQuoteLeft/>
        </div>

        <div className='text-center text-slate-500 mt-4'>
            {review.text}
        </div>

        <div className='text-[#a78bfa] flex mx-auto justify-center'>
            <FaQuoteRight/>
        </div>

        <div>
            <button>
                
            </button>
        </div>

        <div className="text-[#a78bfa] hover:text-[#8b5cf6]" >
            <button>   + </button>
        </div>

        <div className='bg-[#a78bfa] mt-5, bg-violet-400, hover:bg-violet-500, shadow-md, hover:shadow, transition-all, duration-200, cursor-pointer, px-10, py-2, rounded-md, font-bold, text-white, text-lg'>
            <button>
                Surprise me
            </button>
        </div>



    </div>

  )
}

export default Card;
