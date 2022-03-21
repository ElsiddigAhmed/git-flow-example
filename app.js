const  express  = require("express");
const config = require("./config/config.js");
const router = require("./routes");

const app = express();

const port = config.port;
const host = config.host;

app.use("/", router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen("1200", "localhost", () => {
    console.log(`Server Listening at http://${host}:${port}`);

   
});   