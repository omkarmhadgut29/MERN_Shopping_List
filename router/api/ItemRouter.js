import express from "express";
import {
    deleteItems,
    getItems,
    postItems,
} from "../../controllers/ItemController.js";

const itemRouter = express.Router();

itemRouter.route("/").get(getItems).post(postItems);

itemRouter.route("/:id").delete(deleteItems);

export default itemRouter;
