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
    mode: "",
  });
  // console.log(formData);
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function sumbitHandler(event) {
    event.preventDefault();
    console.log("Finally printing");
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={sumbitHandler}>
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
        <br></br>
        <br></br>
        <fieldset>
          <legend>Mode</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          ></input>
          <label htmlFor="Online-Mode">Online Mode</label>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
          ></input>
          <label htmlFor="Offline-Mode">Offline Mode</label>
        </fieldset>
        <label>Tell me about yor car </label>
        <br></br>
        <select
          onChange={changeHandler}
          name="favCar"
          id="favCar"
          value={formData.favCar}
        >
          <option value="scorpio">Scorpio</option>
          <option value="Audi">Audi R8</option>
          <option value="BMW">BMW X7</option>
          <option value="G-Wagon">G-Wagon</option>
          <option value="Wagon-R">Wagon-R</option>
          <option value="Thar">Thar</option>
          <option value="Alto">Alto</option>
        </select>
        <br></br>
        <br></br>
        {/* <input type="submit" value="submit">
          Submit
        </input> */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
