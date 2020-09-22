import React, { useState } from "react";
import "./App.css";

function App() {
  var listData = ["apple", "banana", "car"];
  var [listData2, setListDate2] = useState(["apple2", "banana2", "car2"]);
  var [word, setWord] = useState("photo");
  var [like, setLike] = useState([4, 7, 0]);

  console.log(listData2);

  return (
    <div>
      <header>
        <h1>{word} TODO it!</h1>
      </header>
      <ul>
        <li>
          {listData2[0]}
          <button
            onClick={() => {
              setWord("Cat");
            }}
          >
            click!
          </button>
          <button
            onClick={() => {
              setListDate2(["apple3", "banana2", "car2"]);
            }}
          >
            3
          </button>
        </li>
        <li>
          {listData2[1]}
          <button
            onClick={() => {
              var like2 = [...like];
              like2[1]++;
              setLike(like2);
            }}
          >
            Like!
          </button>
          <span>{like[1]}</span>
        </li>
        <li>{listData2[2]}</li>
      </ul>
    </div>
  );
}

export default App;
