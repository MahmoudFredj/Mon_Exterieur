import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { apiCallBegan } from "../api";
const slice = createSlice({
    name: "boutique",
    initialState: {
        loading: false,
        error: null,
        list: []
    },

    reducers: {
        callBegan: (boutique, action) => {
            boutique.error = null;
            boutique.loading = true;
        },
        callFailed: (boutique, action) => {
            boutique.error = action.payload;
            boutique.loading = false;
        },
        boutiqueLoaded: (boutique, action) => {
            boutique.list = action.payload;
        }
    }
});



export default slice.reducer;

const url = "af37df01";
const actions = slice.actions;


export const loadBoutique = () => apiCallBegan({
    url,
    onStart: actions.callBegan.type,
    onSuccess: actions.boutiqueLoaded.type,
    onError: actions.callFailed.type,
});