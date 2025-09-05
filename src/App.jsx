import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import Friends from "./Friends";
import "./App.css";
import { Suspense } from "react";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
  const friendsPromise = fetchFriends();

  function handleClick() {
    alert("I'm clicked");
  }

  const handleClick3 = () => {
    alert("Clicked 3");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h1>Vite + React</h1>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter>

      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function handleClick2() {
          alert("Clicked 2");
        }}
      >
        Click Me 2
      </button>
      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={() => alert("Clicked 4")}>Click Me 4</button>
      {/* <button onClick={handleAdd5(7)}>Click Add 5</button> */}
      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  );
}

export default App;
