import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/");
  }

  function backHandler() {
    navigate(-1);
  }

  return (
    <div>
      <div>This is Support Page</div>
      <button onClick={clickHandler}>Go to Home</button>
      <br></br>
      <button onClick={backHandler}>Back</button>
    </div>
  );
};

export default Support;
