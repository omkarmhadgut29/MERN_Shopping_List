import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    loading: false,
};

export const addItem = createAsyncThunk(
    "https://shoppinglist-api-8wio.onrender.com/api/items",
    async (item) => {
        const response = await axios
            .post("https://shoppinglist-api-8wio.onrender.com/api/items", item)
            .then((res) => {
                return res.data;
            });
        return response;
    }
);

export const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        loadItems: (state, action) => {
            state.items = action.payload;
            state.loading = false;
        },
        deleteItem: (state, action) => {
            axios
                .delete(
                    `https://shoppinglist-api-8wio.onrender.com/api/items/${action.payload}`
                )
                .then((res) => {
                    return res.data;
                });
            state.items = state.items.filter(
                (item) => item._id !== action.payload
            );
        },
        setItemLoading: (state) => {
            state.loading = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addItem.pending, (state) => {
                state.loading = true;
            })
            .addCase(addItem.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            });
    },
});

export const { loadItems, deleteItem, setItemLoading } = itemSlice.actions;

export const getItems = (state) => state.item.items;

export default itemSlice.reducer;
