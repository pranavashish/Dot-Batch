import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
function Testimonial(props) {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);
  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function surpriseMeHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <div className="w-[85vw] md:w-[700px] bg-white hover:shadow-xxl rounded-md flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700">
      <Card review={reviews[index]}></Card>
      <div className="flex mx-auto text-violet-400 text-3xl mt-5 gap-3 font-bold">
        <button onClick={leftShiftHandler} className="cursor-pointer">
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button onClick={rightShiftHandler}>
          <FiChevronRight></FiChevronRight>
        </button>
      </div>

      <div>
        <button
          onClick={surpriseMeHandler}
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 m-4 py-2 rounded-md font-bold text-white text-lg "
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
