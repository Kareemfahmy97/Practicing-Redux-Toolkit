import React from 'react';
import { useDispatch } from 'react-redux';
import { handleDecrement, handleIncrement } from './store/counterSlice';

export default function Counter(){
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <button
        onClick={() => {
          dispatch(handleIncrement(1));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(handleDecrement(1));
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(handleIncrement(10));
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          dispatch(handleDecrement(5));
        }}
      >
        -5
      </button>
    </div>
  );
}
