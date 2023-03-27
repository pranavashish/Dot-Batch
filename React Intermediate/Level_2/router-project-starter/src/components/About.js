import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  function clickHandler() {
    // move to suppport page
    navigate("/support");
  }

  return (
    <div>
      <div>This is About Page</div>
      <button onClick={clickHandler}>Move to Support page</button>;
    </div>
  );
};

export default About;
