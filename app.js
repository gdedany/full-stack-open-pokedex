import express from "express";
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5001;

app.use(express.static("dist"));

app.get("/version", (req, res) => {
  res.send("9");
});

app.get("/health", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
