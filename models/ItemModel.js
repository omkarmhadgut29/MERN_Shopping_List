import mongoose from "mongoose";

const ItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const ItemModel = mongoose.model("Item", ItemSchema);

export { ItemModel };
