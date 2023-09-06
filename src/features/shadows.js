import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
    {
        id: nanoid(8),
        active: true,
        inset: false,
        inputs: [
            {
                inputNumber: 1,
                name: "offset horizontal",
                value: 0,
                type: "range",
                minMax: [-250, 250],
            },
            {
                inputNumber: 2,
                name: "offset vertical",
                value: 10,
                type: "range",
                minMax: [-250, 250],
            },
            {
                inputNumber: 3,
                name: "Flou",
                value: 15,
                type: "range",
                minMax: [0, 250],
            },
            {
                inputNumber: 4,
                name: "Etendue ",
                value: -3,
                type: "range",
                minMax: [-250, 250],
            },
            {
                inputNumber: 5,
                name: "Couleur ",
                value: "#4F4F4F",
                type: "color",
            },
        ],
    },
];

export const shadowSlice = createSlice({
    name: "shadows",
    initialState,
    reducers: {
        removeShadow: (state, action) => {
            const indexShadowRemove = state.findIndex(shadow => shadow.id === action.payload)
            state.splice(indexShadowRemove, 1)
        },

        addShadow: (state) => {
            state.push({
                id: nanoid(8),
                active: true,
                inset: false,
                inputs: [
                    {
                        inputNumber: 1,
                        name: "offset horizontal",
                        value: 0,
                        type: "range",
                        minMax: [-250, 250],
                    },
                    {
                        inputNumber: 2,
                        name: "offset vertical",
                        value: 10,
                        type: "range",
                        minMax: [-250, 250],
                    },
                    {
                        inputNumber: 3,
                        name: "Flou",
                        value: 15,
                        type: "range",
                        minMax: [0, 250],
                    },
                    {
                        inputNumber: 4,
                        name: "Etendue ",
                        value: -3,
                        type: "range",
                        minMax: [-250, 250],
                    },
                    {
                        inputNumber: 5,
                        name: "Couleur ",
                        value: "#4F4F4F ",
                        type: "color",
                    },
                ],
            });
        },
        updateShadowValues: (state, action) => {
            const currentShadow = state.find(
                (shadow) => shadow.id === action.payload.shadowID
            );
            const currentInput = currentShadow.inputs.find(
                (input) => input.inputNumber === action.payload.inputNumber
            );
            currentInput.value = action.payload.value

        },
        updateShadowCheckbox: (state, action) => {
            const currentShadow = state.find(
                (shadow) => shadow.id === action.payload.shadowID
            );
            currentShadow[action.payload.name] = !currentShadow[action.payload.name]
        },
    },
});

export const {
    removeShadow,
    addShadow,
    updateShadowValues,
    updateShadowCheckbox,
} = shadowSlice.actions;
export default shadowSlice.reducer;
