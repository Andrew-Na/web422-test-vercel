const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {

  res.send("hello testing");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});