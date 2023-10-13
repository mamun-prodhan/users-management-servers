const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com" },
  { id: 2, name: "Sabnoor", email: "sabnoor@gmail.com" },
  { id: 3, name: "Purnima", email: "purnima@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Users server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
