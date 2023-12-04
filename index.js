const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {

    return res.status(200).json({
      msg: "hello",
    });
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});