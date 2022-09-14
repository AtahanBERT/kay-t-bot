const mongoose = require("mongoose");
const config = require("../configs/config");
const client = global.client

mongoose.connect(process.env.mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => { client.logger.log("Connected to MongoDB. ✔", "ready") });
mongoose.connection.on("error", () => { client.logger.log("Connection Failed. ✘", "error") });