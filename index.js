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

app.get("/articles", (req, res) => {
  res.render("articles", { title: "Articles", active: "article" });
});

app.get("/article/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  res.render("article", { title: `Article id: ${id}`, active: "article", articleId: id });
});

app.get("/*", (req, res) => {
  console.log("404 page?");
  res.render("notfound", { title: "404 page" });
});

app.listen(PORT, () => {
  console.log(`Server started on port localhost:${PORT}`);
});
