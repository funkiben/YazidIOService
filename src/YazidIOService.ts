import {Request, Response} from "express";

const express = require("express");

const app = express();

app.get("/join", (req: Request, res: Response) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});