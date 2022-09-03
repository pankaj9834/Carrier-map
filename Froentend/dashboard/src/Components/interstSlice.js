import { createSlice } from '@reduxjs/toolkit';
import interestItems from '../assets/interests';
const initialState = {
  interestItems: [],
  number:0,
  isLoading: true,
  buttonTogle: true
};

const interestSlice = createSlice({
  name: 'interest',
  initialState,
  reducers:{
    clearInterests:(state) =>{
      state.interestItems=[];
      state.number = 0;
    },
    removeItem:(state, action)=>{
      const itemId = action.payload;
      state.interestItems = state.interestItems.filter((item)=>item.id !== itemId);
      state.number = state.number - 1;
    },

    addItem:(state, action) => {
      const itemIndex = state.interestItems.findIndex(
        (item) => item.id === action.payload.id
      )
      // console.log(itemIndex)
      if (itemIndex === -1)
        {
        const temp = {...action.payload}
        state.interestItems.push(temp)
        state.number = state.number + 1
      }
    }
      
      
      
  }
   
});

// console.log(cartSlice);

export default interestSlice.reducer;
export const{ clearInterests, removeItem, addItem } = interestSlice.actions