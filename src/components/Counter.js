import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from '../store/index';

const Counter = () => {
  //useSelector hook subscribe the component to store and get a selective data from store object
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter); 
  const dispatch = useDispatch();
  
  function handleIncrement() {
    dispatch(counterActions.increment());
  }
  function handleDecrement() {
    dispatch(counterActions.decrement());
  }
  
  function handleIncrease() {
    //this extra argument is called payload to the action
    dispatch(counterActions.increase(10));
  }
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        show && <div className={classes.value} onClick={toggleCounterHandler}>{counter}</div>
      
      }
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>increase by 10</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
