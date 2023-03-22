import React from "react";
import { FcLike } from "react-icons/fc";
const Card = ({ props }) => {
  let course = props.course;
  return (
    <div>
      <div>
        <img src={course.image.url} />
      </div>
      <div>
        <button>
          <FcLike fontSize="1.75rem"></FcLike>
        </button>
      </div>
      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
