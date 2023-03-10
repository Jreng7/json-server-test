import express, { Router } from "express";
import cors from "cors";

class App {
  constructor() {
    this.server = express();

  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors);
  }

  routes() {
    const routes = new Router();

    routes.get('./hello', (req, res) => {
      res.json({ hello: 'World'})
    });

    this.server.use(routes);
  }
}

export default new App().server