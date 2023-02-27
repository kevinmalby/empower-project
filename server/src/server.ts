import * as dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import noteRoutes from "./routes/note.routes.js";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use("/notes", noteRoutes);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
