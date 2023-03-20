import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState("Pranav");

  //variation 1
  // useEffect(() => {
  //   console.log("UI RENDERING DONE");
  // });

  //variation 2  -> First Render
  // useEffect(() => {
  //   console.log("UI REDERING DONE");
  // }, []);

  //variation 3 -> whenever dependency changes
  // useEffect(() => {
  //   console.log("Change hua");
  // }, [name]);

  //variation 4 -> to handle unmounting of a compenent
  useEffect(() => {
    //add event listener
    console.log("Listener added");
    return () => {
      console.log("listener removed");
    };
  }, [text]);

  function changeHandler(event) {
    console.log(text);
    setText(event.target.value);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
