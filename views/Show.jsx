const React = require("react");
const DefaultLayout = require("./layouts/Default");

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
      <DefaultLayout title="Gotta Catch 'Em All">
        <h2>{name}</h2>
        <img src={`${pokemon?.img}.jpg`} />
        <a style={linkStyles} href="/pokemon">
          <div style={buttonStyles}>Back</div>
        </a>
      </DefaultLayout>
    );
  }
}

module.exports = Show;
