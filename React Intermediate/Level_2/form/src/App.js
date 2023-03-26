import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    sameas: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("printing value:");
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center ">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <br></br>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Pranav"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        ></input>
        <br></br>
        <label htmlFor="lastName">Last Name</label>
        <br></br>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Ashish"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
        ></input>
        <br></br>
        <label htmlFor="email">Email Address</label>
        <br></br>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="pranavashish@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
        ></input>
        <br></br>
        <label htmlFor="country">Country</label>
        <br></br>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <br></br>
        <label htmlFor="streetAddress">Street Address</label>
        <br></br>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="1234 Main St"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"
        ></input>
        <br></br>
        <label htmlFor="city">City</label>
        <br></br>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="New Delhi"
          value={formData.city}
          onChange={changeHandler}
          className="outline"
        ></input>
        <br></br>
        <label htmlFor="state">State / Province</label>
        <br></br>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Delhi"
          value={formData.state}
          onChange={changeHandler}
          className="outline"
        ></input>
        <br></br>
        <label htmlFor="zip">Zip / Postal code</label>
        <br></br>
        <input
          type="number"
          name="zip"
          id="zip"
          placeholder="110022"
          value={formData.zip}
          onChange={changeHandler}
          className="outline"
        ></input>
        <br></br>
        <br></br>
        <fieldset>
          <legend>By email</legend>
          <div className="flex">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
            ></input>
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones post a comment on a posting</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              id="candidates"
              name="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            ></input>
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              id="offers"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
            ></input>
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>
        <br></br>
        <br></br>
        <fieldset>
          <legend>Push Notifications</legend>
          <p> These are delivered via SMS to your mobile phone.</p>

          <input
            type="radio"
            onChange={changeHandler}
            name="sameas"
            id="pushNoti"
            value="Everything"
          ></input>

          <label htmlFor="pushNoti">Everything</label>
          <br></br>
          <input
            type="radio"
            onChange={changeHandler}
            name="sameas"
            id="sameas"
            value="SameAsEmail"
          ></input>

          <label htmlFor="sameas">Same as email</label>
          <br></br>
          <input
            type="radio"
            onChange={changeHandler}
            name="sameas"
            id="noPush"
            value="noPush"
          ></input>

          <label htmlFor="noPush">No push notification</label>
        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
