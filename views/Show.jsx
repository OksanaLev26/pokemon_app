const React = require("react");
const pokemons = require("../models/pokemon");

const myStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "20px",
  color: "#ffffff",
  backgroundColor: "#0f0b54",
  height: "100vh",
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
  marginTop: "40px",
  fontSize: "28px",
};

const linkStyles = {
  textDecoration: "none",
  color: "white",
};

class Show extends React.Component {
  render() {
    const { pokemon } = this.props;
    const name = `${pokemon?.name[0]?.toUpperCase()}${pokemon?.name?.slice(1)}`;

    return (
      <div style={myStyle}>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{name}</h2>
        <img src={`${pokemon?.img}.jpg`} />
        <a style={linkStyles} href="/pokemon">
          <div style={buttonStyles}>Back</div>
        </a>
      </div>
    );
  }
}

module.exports = Show;
