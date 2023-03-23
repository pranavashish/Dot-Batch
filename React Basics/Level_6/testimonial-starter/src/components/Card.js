import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card(props) {
  let review = props.review;
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-[10]">
        <img
          src={review.image}
          alt="img"
          className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
        ></img>
        <div className=" bg-violet-500 absolute rounded-full w-[140px] h-[140px] z-[-1] left-[10px] top-[-6px]"></div>
      </div>

      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize tracking-wider">
          {review.name}
        </p>
      </div>

      <div className="text-center ">
        <p className="text-violet-300 uppercase text-sm">{review.job}</p>
      </div>

      <div className="text-center text-violet-400 mx-auto mt-5">
        <FaQuoteLeft></FaQuoteLeft>
      </div>

      <div className="text-center mt-4 text-slate-500 ">
        <p>{review.text}</p>
      </div>

      <div className="text-center text-violet-400 mx-auto mt-5">
        <FaQuoteRight></FaQuoteRight>
      </div>
    </div>
  );
}

export default Card;
