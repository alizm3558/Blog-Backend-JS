
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


const authRouter = require("./routers/auth");
const postRouter = require("./routers/posts");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");

require("dotenv/config");
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.axl8t.mongodb.net/blog?retryWrites=true&w=majority`,

    (e) => {
        if (e) {
            console.log(e);
            console.log("Failed connect")

        }
        else {
            console.log("Connected database");
        }

    }, {
        useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true, //make this true
    autoIndex: true,
}
);




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.use("/auth", authRouter);
app.use("/post", postRouter);
