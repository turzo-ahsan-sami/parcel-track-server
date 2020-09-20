import mongoose from "mongoose";

require("dotenv").config();
// export const uri = "mongodb://localhost:27017/parcelkoi";
export const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.6dpsb.gcp.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority`;
const options = {};


const log = (msg) => console.log(msg);

export const connectWithDb = () => {
    mongoose.connect(uri, options, (err, db) => {
        if (err) {
            console.error(err);
        }

        else log("database connection established");
    });
};