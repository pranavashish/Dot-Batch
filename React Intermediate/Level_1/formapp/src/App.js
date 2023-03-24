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
  });

  function changeHandler(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: [event.target.value],
      };
    });
  }

  return (
    <div className="App">
      <form>
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
      </form>
    </div>
  );
}

export default App;
