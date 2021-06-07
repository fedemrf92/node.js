const fruits = ["Manzana", "Pera", "Frutilla"];

const showFruits = (req, res) => {
  res.render("fruits", { fruits });
};

const getFruits = (req, res) => {
  const fruit = req.body.newFruit;
  fruits.push(fruit);
  res.redirect("/frutas");
};

module.exports = { showFruits, getFruits };
