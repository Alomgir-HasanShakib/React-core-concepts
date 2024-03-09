import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Card.css";
import Person from "./Person";
import Counter from "./Counter";
import Users from "./Users";
import Friends from "./Friends";

function App() {
  // const clickedBtn = (num) => {
  //   alert(num + 5);
  // };
  return (
    <>
      <h3>This is React application</h3>
      <Friends></Friends>


      <Users></Users>

      <Counter></Counter>

      {/* <div className="main-div">
        <div className="sub-div">
          <Person></Person>
        </div>
        {/* রিয়াক্টে JavaScript এর মতো করে onclick দিলে কাজ করবেনা।
        <button onclick="clickedbtn()"></button>
        */}

      {/* রিয়াক্টে আরগুমেন্টস এভাবে পাস করলে সেটা কাজ করবেনা।
         <button onClick={clickedBtn}>btn 1</button> */}

      {/* রিয়াক্টে আরগুমেন্টস পাস করতে হলে onClick এর মধ্যে function কে Arrow function দিয়ে wrap করে নিতে হয়। */}

      {/* <button onClick={() => clickedBtn(5)}>Click Me</button>
      </div>
      <Student grade="7" score="99"></Student> */}
    </>
  );
}

// distructure the props value ======> { grade, score }

// function Student({ grade, score }) {
//   // console.log(props);
//   return (
//     <div className="main-div">
//       <h2>Grade is : {grade}</h2>
//       <h2>Scores is : {score}</h2>
//     </div>
//   );
// }

export default App;
