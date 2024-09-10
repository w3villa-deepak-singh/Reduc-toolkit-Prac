// import  {createReducer} from "@reduxjs/toolkit";

// const initialState={
//     c: 0,
// };


// export const  customReducer = createReducer(initialState, {
   
//      increment: (state) =>{
//         state.c += 1;
//      },

//      incrementByValue: (state,action) =>{
//         state.c += 1;
//         state.c += action.payload;
//      },

//      decrement: (state) =>{
//         state.c -= 1;
//      },


// });

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  c: 0,
};

const customSlice = createSlice({
  name: 'custom',
  initialState,
  reducers: {
    increment: (state) => {
      state.c += 1;
    },
    incrementByValue: (state, action) => {
      state.c += action.payload;
    },
    decrement: (state) => {
      state.c -= 1;
    },
  },
});

export const { increment, incrementByValue, decrement } = customSlice.actions;
export const customReducer = customSlice.reducer;
