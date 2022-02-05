import { createSlice } from "@reduxjs/toolkit";



const initialState = {
      currentItem: []
    };

    const userSlice = createSlice({
        name: "student",
        initialState,
        reducers: {
            load(state, action) {
                let current = action.payload;
                state.currentItem = current;
              },
            }

        })


        export const { load } =  userSlice.actions;
      
      export default userSlice.reducer;