import { useState } from "react";
import "./App.css";
import Footer from "./Footer";

function App() {
  const [date, setdate] = useState("");
  const [luckynum, setluckynum] = useState("");
  const [result, setresult] = useState("");

  const checkNum = () => {
    const sum = getDateSum();

    if (sum % luckynum === 0) {
      setresult("lucky number ✨");
    } else {
      setresult("not lucky number 🥺");
    }
  };
  const getDateSum = () => {
    const data = date.split("-");

    const sum = parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2]);

    return sum;
  };
  return (
    <div className="App">
      <h1>Is your birthday lucky number?</h1>
      <h3>Date of birth</h3>
      <input
        onChange={(e) => {
          setdate(e.target.value);
        }}
        type="date"
        id="birthday"
        name="birthday"
      />
      <h3>Lucky number</h3>

      <input
        type="number"
        onChange={(e) => {
          setluckynum(e.target.value);
        }}
      />
      <br />
      <button className="button" onClick={checkNum}>
        check number
      </button>
      {result !== null && <h1>{result}</h1>}
      <Footer />
    </div>
  );
}

export default App;
