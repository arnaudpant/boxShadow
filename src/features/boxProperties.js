import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        inputNumber: 1,
        name: "Border radius",
        value: 25,
        type: "range",
        minMax: [0, 250],
    },
    {
        inputNumber: 2,
        name: "Height",
        value: 250,
        type: "range",
        minMax: [0, 500],
    },
    {
        inputNumber: 3,
        name: "Width",
        value: 250,
        type: "range",
        minMax: [0, 500],
    },
    {
        inputNumber: 4,
        name: "Background color",
        value: "#FFF ",
        type: "color",
    },
];

export const boxSlice = createSlice({
    name: "boxProperties",
    initialState,
    reducers: {
        updateBoxValues: (state, action) => {
            state.find(elt => elt.inputNumber === action.payload.inputNumber).value = action.payload.value
        },
    },
});

export const { updateBoxValues } = boxSlice.actions;
export default boxSlice.reducer;
