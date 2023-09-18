const React = require("react");
const pokemons = require("../models/pokemon");

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

class Index extends React.Component {
  render() {
    
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>
          {pokemons.map((pokemon, i) => {
            const name = `${pokemon.name[0].toUpperCase}${pokemon.name[0].slice(1)}`
            return (
              <li>
                 <a href={`/pokemons/${i}`}>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</a>
                
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;