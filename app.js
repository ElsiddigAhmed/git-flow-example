const express = require("express");
const config = require("./config/config.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("", process.env.APP_PORT);

app.listen(process.env.APP_PORT, "localhost", () => {
  console.log(
    `Server Listening at http://${process.env.APP_HOST}:${process.env.APP_PORT}`
  );
});
