import {createSlice, PayloadAction} from "@reduxjs/toolkit"

const initialState = {
    context: "",
    themeFlag:null
}

export const Slice = createSlice({
    name: 'Slice',
    initialState,
    reducers: {
        addContext:(state:any,action:PayloadAction<any>)=>{
            state.themeFlag = action.payload
        }
    },
})

export const { addContext } = Slice.actions

export default Slice.reducer