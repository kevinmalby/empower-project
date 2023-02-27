import * as dotenv from "dotenv";
import express, { Express } from "express";
import bodyParser from "body-parser";
import noteRoutes from "./routes/note.routes.js";

dotenv.config();

const server: Express = express();
const port = process.env.PORT;

// TODO: Figure out how to actually leverage cors package
server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use("/notes", noteRoutes);

server.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
