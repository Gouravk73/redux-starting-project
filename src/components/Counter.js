import {useSelector, useDispatch} from 'react-redux'
import {counterActions} from'../store/index'
import classes from './Counter.module.css';

const Counter = () => {
  const counter=useSelector(state=>state.counter.counter);
  const show=useSelector(state=>state.counter.showCounter);
  const dispatch=useDispatch();
  const incrementHandler=()=>{
    dispatch(counterActions.increment())
  } 
  const decrementHandler=()=>{
    dispatch(counterActions.decrement() )

  }
  const incrementBy5Handler=()=>{
    dispatch(counterActions.increase(10))
  }
  const decrementBy5Handler=()=>{
    dispatch(counterActions.decrease(10))
  }
  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>COUNTER VALUE = {counter} </div>
      {show&&<div >
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={incrementBy5Handler}>increment by 5</button>
        <button onClick={decrementBy5Handler}>decrement by 5</button>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
