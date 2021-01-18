import express from "express";
import path from "path";
import { requestTime, logger } from "./src/middlewares.js";
import { serverRouter } from "./src/routes/servers.js";

const __dirname = path.resolve();

const PORT = 8080;
const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "src/template"));

app.use(express.static(path.resolve(__dirname, "src/static")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(requestTime);
// app.use(logger);

app.use(serverRouter);

app.get("/", (req, res) => {
  res.render("index", { title: "Home", active: "home" });
});

app.get("/article", (req, res) => {
  res.render("article", { title: "Article", active: "article" });
});

app.listen(PORT, () => {
  console.log(`Server started on port localhost:${PORT}`);
});
