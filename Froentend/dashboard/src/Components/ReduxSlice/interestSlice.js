import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  interestItems: [],
  number:0,
  isLoading: true,
  buttonToggle: true
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
    },
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.interestItems = [];
      state.number = 0;
    },
      
      
      
  }
   
});

// console.log(cartSlice);

export default interestSlice.reducer;
export const{ clearInterests, removeItem, addItem, login, logout } = interestSlice.actions
export const selectUser = (state) => state.interest.user;