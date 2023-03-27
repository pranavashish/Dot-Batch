import { useNavigate } from "react-router-dom";

const Labs = () => {
  const navigate = useNavigate();

  function clickHandler() {
    //move to about page
    navigate("/about");
  }

  return (
    <div>
      <div>This is Labs Page</div>
      <button onClick={clickHandler}>Move to about page</button>
    </div>
  );
};

export default Labs;
