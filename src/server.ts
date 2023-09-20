import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import * as authController from "./controllers/auth.controller";

const port = process.env.PORT || 9000;
const frontAppDir = path.resolve(__dirname, "../../swisex-front/build");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(frontAppDir));

// Serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(frontAppDir + "/index.html");
});

// Ping test
app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

app.post("/api/auth", authController.apiAuth);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
