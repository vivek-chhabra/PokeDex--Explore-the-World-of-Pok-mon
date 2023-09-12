import { createSlice } from "@reduxjs/toolkit";
import { PokemonSlice } from "../../Types/interfaces";

const initialState: PokemonSlice = {};

const appSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {},
});
