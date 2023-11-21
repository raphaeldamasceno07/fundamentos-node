const express = require("express");

const app = express();

app.get("/courses", (request, response) => {
  return response.json(["course 1", "course 2", "course 3"]);
});

app.post("/courses", (request, response) => {
  return response.json(["course 1", "course 2", "course 3","course 4"]);
});

app.listen(3333);
