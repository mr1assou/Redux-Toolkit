
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement } from './state/counter/counterSlice';
import { incrementAsync } from './state/counter/counterSlice';

// Store
// slices of counter hold pieces of state related to the couter  
// actions what it shold do to the state increment decrement 
// action : const increment= {type: "increment" , payload :1}; type always string payload is not required
// reducer make the update in redux store and reducer doesn't directly mutate the state make copy make chnages to copy 
// and overrite whole state 

function App() {
  // from the store
  const count=useSelector((state)=>state.counter.value);
  // dispatch to actions
  const dispatch=useDispatch();

  return (
    <>
      <p>{count}</p>
      <div>
          {/* increment is a function return action object {type and payload} if you wnat payload do 
          increment(10)*/}
          <button onClick={()=> dispatch(increment(30))}>Increment</button>
          <button onClick={()=> dispatch(decrement(30))}>Decrement</button>
          <button onClick={()=> dispatch(incrementAsync(200))}>Async increment</button>
      </div>
    </> 
  )
}

export default App
