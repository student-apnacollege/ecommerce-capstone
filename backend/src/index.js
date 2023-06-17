const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ message: "Hello!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
