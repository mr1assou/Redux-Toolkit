import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// initial value

const counterSlice=createSlice({
    name:'counter',
    initialState: { value: 0 },
    reducers: {
        //  like function in use reducer and action is optionnal if we want increase by 10 or 11
        increment: (state,action)=>{
            console.log("action: ",action.payload);
            state.value+=action.payload;
        },
        decrement: (state,action)=>{
            state.value-=action.payload;
        }
    },

    extraReducers: (builder)=>{
        builder.addCase(incrementAsync.fulfilled,(state,action)=>{
            state.value += action.payload;
        })
    }
})

// this are action which we use inside dispatch and component
export const {increment,decrement} = counterSlice.actions;
// for reducer
export default counterSlice.reducer;

// asynch we defin actiob first
export const incrementAsync=createAsyncThunk(
    // we define the names ourselfs not like synchronous
    "counter/incrementAsynch",
    async (amount)=>{
        // we pass resolve and reject
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        return amount;
    }
)