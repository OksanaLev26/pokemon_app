const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");
const pokemons = require("./models/pokemon.js");
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

app.get("/", (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!</h1>');
  });

app.get("/pokemon/", (req, res) => {
    res.send(pokemons)
//   res.render('Index', { pokemons: pokemons });
});

app.get("/pokemon/:indexOfPokemonArray", (req, res) => {
  res.render("Show", {
    pokemon: pokemons[req.params.indexOfPokemonArray],
  });
});

app.listen(3000, () => {
  console.log("listening");
});
