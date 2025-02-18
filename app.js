// app.js
const express = require("express");
const app = express();
const usersRouter = require("./routes/usersRouter");

const path = require("path");



const usersController = require("./controllers/usersController");




app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));


app.use("/", usersRouter);


app.get("/", usersController.usersListGet);
usersRouter.get("/:id/update", usersController.usersUpdateGet);
usersRouter.post("/:id/update", usersController.usersUpdatePost);
usersRouter.post("/:id/delete", usersController.usersDeletePost);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
