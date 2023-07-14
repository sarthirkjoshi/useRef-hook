import "./styles.css";
import { useRef } from "react";

export default function App() {
  const inputValue = useRef();
  const updateMe = () => {
    console.log(inputValue.current);
    inputValue.current.focus();
    inputValue.current.style.width = "400px";
  };
  return (
    <div className="App">
      <h1>useRef hooks</h1>
      <input type="text" ref={inputValue} />
      <button onClick={updateMe}>Update me </button>
    </div>
  );
}
