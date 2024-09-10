// import React from 'react';
// import { useDispatch } from 'react-redux';


// const Home = () => {
//     const value =20;
//     const dispatch = useDispatch();

//     const addBtn = () =>{
//         dispatch({
//             type: "increment",
//         });
//     };

//     const subBtn = () =>{
//         dispatch({
//             type: "decrement",
//         });
//     }
//     return(
//         <div>
         
//          <h2> {value}</h2>

//          <button onClick={addBtn}> Increment</button>
//          <button onClick={subBtn}> Decrement</button>

//       </div>
//     )
// }

// export default Home;


// Home.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, incrementByValue, decrement } from './Reducers';

const Home = () => {
    const value = useSelector(state => state.custom.c);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    } ;

    const handleIncrementByValue = () => {
        // You can change this value as needed
        const incrementAmount = 5;
        dispatch(incrementByValue(incrementAmount));
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <h2>{value}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleIncrementByValue}>Increment by 5</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Home;
