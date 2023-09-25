const React = require("react");

const myStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "20px",
  color: "#ffffff",
  backgroundColor: "#0f0b54",
  minHeight: "100vh",
};

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
  width: "300px",
  height: "60px",
  cursor: "pointer",
  border: "1px solid white",
  borderRadius: "8px",
  color: "white",
  fontSize: "28px",
};

class Index extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
          {pokemons.map((pokemon) => {
            const name = `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(
              1
            )}`;
            return (
              <ul key={pokemon.name}>
              <li style={liStyles}>
                <a style={linkStyles} href={`/pokemon/${pokemon.id}`}>
                  {name}
                </a>
              </li>
              </ul>
            );
          })}
        <nav>
          <a style={linkStyles} href="/pokemon/new">
            <div style={buttonStyles}>Create a New Pokemon</div>
          </a>
        </nav>
      </div>
    );
  }
}

module.exports = Index;
