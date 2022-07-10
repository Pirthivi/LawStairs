// Import Libraries
import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

import cors from "cors";
import userSchema from "./Schema/userSchema.js";
import File from "./Schema/fileSchema.js";
// decleare veriables and libraries
const db = process.env.DB;
const PORT = process.env.PORT;
const app = express();

//Middle wares
app.use(express.json()); // convert data to json before sending to server
app.use(cors()); // allow access to header

// connection TO DATABASE
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Data base connected ");
  });

// API END POINTS
app.get("/", (req, res) => {
  res.status(200).send("hellllo world");
});

// Post File Info to database
app.post("/v4", async (req, res) => {
  const data = await File.findOne({ fileName: req.body.fileName });
  if (data) {
    console.log(data);
    res.status(400).send({
      message: `This File Already exists in Databbase 
      `,
    });
    return;
  } else {
    const file = await new File(req.body);
    try {
      await file.save();
      res.status(200).json({ message: "File Sent to Data base " });
    } catch {
      res.status(400).json({
        message:
          "some Error occur please check your internet connection and try again",
      });
    }
  }
});

// Send all file to End Point
app.get("/v4", async (req, res) => {
  const file = await File.find();
  try {
    res.status(200).send(file);
  } catch {
    res.send(400).send("Some think went wrong");
  }
});

// Access to login User
app.post("/v3", async (req, res) => {
  const user = await userSchema.findOne({ username: req.body.username });
  try {
    if (user) {
      if (user.password === Number(req.body.password)) {
        res.status(200).send({ message: "success" });
      } else {
        res.status(401).send({ message: "invaild Creadintials" });
      }
    }
    if (!user) {
      res.status(401).send({ message: `invaild creandetials` });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

//  SERVER LISTING
app.listen(PORT, () => {
  console.log(`b-end server is running on port : ${PORT}`);
});
