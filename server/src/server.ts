import * as dotenv from "dotenv";
import express, { Express } from "express";
import bodyParser from "body-parser";
import noteRoutes from "./routes/note.routes.js";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/notes", noteRoutes);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
