import express from "express";
import expressAsyncHandler from "express-async-handler";
import { ItemModel } from "../models/ItemModel.js";

/** 
    @route  GET api/items
    @desc   Get All Items
    @access Public
*/
const getItems = expressAsyncHandler(async (req, res) => {
    await ItemModel.find()
        .sort({ date: -1 })
        .then((items) => res.json(items));
});

/** 
    @route  POST api/items
    @desc   Create A Item
    @access Public
*/
const postItems = expressAsyncHandler(async (req, res) => {
    const newItem = await ItemModel.create({
        name: req.body.name,
    });

    res.status(200).json(newItem);
});

/** 
    @route  DELETE api/items/:id
    @desc   Delete A Item
    @access Public
*/
const deleteItems = expressAsyncHandler(async (req, res) => {
    const item = await ItemModel.findById(req.params.id);

    if (!item) {
        res.status(404);
        throw new Error("Item not tfound");
    }

    await ItemModel.deleteOne({ _id: req.params.id });
    res.status(200).json(item);
});

export { getItems, postItems, deleteItems };
