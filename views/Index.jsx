const React = require("react");
const DefaultLayout = require("./layouts/Default");

const linkStyles = {
  textDecoration: "none",
  color: "white",
  fontSize: "25px",
  margin: "20px",
};

const liStyles = {
  marginBottom: "15px",
};

const buttonStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "250px",
  height: "60px",
  cursor: "pointer",
  border: "1px solid white",
  borderRadius: "8px",
  color: "white",
  fontSize: "24px",
};

const pokemonButtonStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "150px",
  height: "40px",
  cursor: "pointer",
  border: "1px solid white",
  borderRadius: "8px",
  color: "white",
  fontSize: "20px",
  marginRight: "15px",
  backgroundColor: "#0f0b54",
  textDecoration: "none",
};

const pokemonStyles = {
  display: "flex",
  alignItems: "flex-start",
};

class Index extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <DefaultLayout title="See All The Pokemon!">
        {pokemons.map((pokemon) => {
          const name = `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(
            1
          )}`;
          return (
            <ul key={pokemon.name}>
              <div style={pokemonStyles}>
                <li style={liStyles}>
                  <a style={linkStyles} href={`/pokemon/${pokemon.id}`}>
                    {name}
                  </a>
                </li>
                <a
                  style={pokemonButtonStyles}
                  href={`/pokemon/${pokemon._id}/edit`}
                >
                  Edit
                </a>
                <form
                  action={`/pokemon/${pokemon._id}?_method=DELETE`}
                  method="POST"
                >
                  <button type="submit" style={pokemonButtonStyles}>
                    Delete
                  </button>
                </form>
              </div>
            </ul>
          );
        })}
        <nav>
          <a style={linkStyles} href="/pokemon/new">
            <div style={buttonStyles}>Create a New Pokemon</div>
          </a>
        </nav>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
