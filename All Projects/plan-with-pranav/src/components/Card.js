import { useState } from "react";

function Card({ id, image, info, price, name, removeTourHandler }) {
  const [readmore, setReadmore] = useState(false);
  let description = readmore ? info : `${info.substring(0, 200)}....`;
  function readHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} className="image" alt="{name}"></img>
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹ {price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {description}
          <span className="read-more cursor-pointer" onClick={readHandler}>
            {readmore ? ` Show Less` : ` Read More`}
          </span>
        </div>
      </div>
      <button className="btn-red" onClick={() => removeTourHandler(id)}>
        Not Intrested
      </button>
    </div>
  );
}

export default Card;
