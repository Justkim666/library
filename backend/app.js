const express = require("express");
const cors = require("cors");
const libraryRouter = require("./app/routes/library.route");
const ApiError = require("./app/api-error")
const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.json({message: "Wellcome to library!"});
});

app.use("/api/library", libraryRouter);
module.exports = app;

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});