import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastname, setLastName] = useState("");

  // function changeFirs tNameHandler(event) {
  //   setFirstName(event.target.value);
  // }
  // function changeLastNameHandler(event) {
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isVisible: true,
  });
  console.log(formData);
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="App">
      <form>
        <br></br>
        <input
          type="text"
          placeholder="first name "
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        ></input>
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="last name "
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        ></input>
        <br></br>
        <br></br>
        <input
          type="email"
          placeholder="Enter email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        ></input>
        <br></br>
        <br></br>
        <textarea
          placeholder="Enter Comments"
          onChange={changeHandler}
          name="comment"
          value={formData.comment}
        ></textarea>
        <br></br> <br></br>
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          // value={formData.isVisible}
          checked={formData.isVisible}
        ></input>
        <label htmlFor="isVisible">Am I Visible?</label>
      </form>
    </div>
  );
}

export default App;
