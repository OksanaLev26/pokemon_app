const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const jsxEngine = require("jsx-view-engine");
const Pokemon = require("./models/pokemon.js");

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());
app.use(express.urlencoded({ extended: false }));

dotenv.config();

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI);

db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Pokemon App!</h1>");
});

app.get("/pokemon/seed", async (req, res) => {
  try {
    await Pokemon.create([
      { name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur" },
      { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur" },
      { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur" },
      {
        name: "charmander",
        img: "http://img.pokemondb.net/artwork/charmander",
      },
      { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard" },
      { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle" },
      { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle" },
    ]);
    res.redirect("/pokemon");
  } catch (error) {
    console.error(error);
  }
});

//INDUCES
// index
app.get("/pokemon/", async (req, res) => {
  try {
    const pokemon = await Pokemon.find();
    res.render("Index", {
      pokemons: pokemon,
    });
  } catch (error) {
    console.log(error);
  }
});

// new
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

// create
app.post("/pokemon", async (req, res) => {
  try {
    await Pokemon.create(req.body);
    res.redirect("/pokemon");
  } catch (error) {
    console.log(error);
  }
});

// show
app.get("/pokemon/:indexOfPokemonArray", async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.params.indexOfPokemonArray);
    res.render("Show", {
      pokemon: pokemon,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("listening");
});
