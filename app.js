const express = require("express");
const app = express();
const path = require("path");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "storage");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/upload", upload.single("image"), (req, res) => {
  res.send("Image uploaded");
});

app.listen(2000);
