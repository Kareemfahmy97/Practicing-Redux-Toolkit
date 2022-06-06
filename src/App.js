import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login, logout } from "./store/actions";

const App = () => {
  const countMe = useSelector((state) => state.counter.count);
  const logMe = useSelector((state) => state.logging.isLogged);
  console.log(logMe);
  const dispatch = useDispatch();
  return (
    <>
      <div className="app">
        <header>
          <div>{countMe}</div>
          {!logMe ? (
            <button
              onClick={() => {
                dispatch(login());
              }}
            >
              login
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(logout());
              }}
            >
              logout
            </button>
          )}
        </header>
        <div className="counter">
          <button
            onClick={() => {
              dispatch(increment());
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              dispatch(increment(10));
            }}
          >
            +10
          </button>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(decrement(5));
            }}
          >
            -5
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
