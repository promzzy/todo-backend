const express = require("express");
const todosRouter = require("./routes/todos.route");

const app = express();
const port = 5000;

app.use("/api/todo", todosRouter);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
