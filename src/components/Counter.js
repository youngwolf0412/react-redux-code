import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  //useSelector hook subscribe the component to store and get a selective data from store object
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter); 
  const dispatch = useDispatch();
  
  function handleIncrement() {
    dispatch({ type: "increment" });
  }
  function handleDecrement() {
    dispatch({ type: "decrement" });
  }
  
  function handleIncrease() {
    //this extra argument is called payload to the action
    dispatch({type:"increase", amount:5});
  }
  
  const toggleCounterHandler = () => {
    dispatch({type:'toggle'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        show && <div className={classes.value} onClick={toggleCounterHandler}>{counter}</div>
      
      }
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>increase by 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
