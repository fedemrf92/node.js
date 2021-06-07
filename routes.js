const pageControllers = require("./controllers/pageControllers");

const routes = (app) => {
  app.get("/frutas", pageControllers.showFruits);

  app.post("/frutas", pageControllers.getFruits);
};

module.exports = routes;
