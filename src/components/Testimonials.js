import React from 'react'
import Card from './Card.js';


const Testimonials = (props) => {
  let reviews = props.reviews;
  return (
    <div className="w-[85vw] md:w-[700px] bg-white mt-10
    shadow-md hover:shadow-xl rounded-md transition-all 
    duration-700 flex flex-col justify-center items-center p-10 ">
        <Card review = {reviews[1]} ></Card>
    </div>
  )
}

export default Testimonials;