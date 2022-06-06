import { useState } from "react";
import Counter from "./Counter";
import Header from "./Header";
import Users from "./Users";

function App() {
  // const [counter, setCounter] = useState(0);
  // const [isLogged, setIsLogged] = useState(false);

  // const handleIncrement = (count) => {
  //   setCounter(counter + count);
  // };
  // const handleDecrement = (count) => {
  //   setCounter(counter - count);
  // };

  // const handleLogin = () => {
  //   setIsLogged(true);
  // };
  // const handleLogout = () => {
  //   setIsLogged(false);
  // };

  return (
    <div className="app">
      <Header
       
      />

      <Counter

      />
      <Users />
    </div>
  );
}

export default App;
