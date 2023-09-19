const React = require("react");

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
  width: "200px",
  height: "45px",
  cursor: "pointer",
  border: "1px solid white",
  borderRadius: "8px",
  color: "black",
  marginTop: "20px",
  fontSize: "20px",
};

const formStyles = {
    fontSize: "25px",
}

const inputStyle = {
    fontSize: "20px",
    marginBottom: "20px",
}

class New extends React.Component {
  render() {
    return (
      <div style={myStyle}>
        <h1>New Pokemon page</h1>
        <form style={formStyles} action="/pokemon" method="POST">
          Name: <input style={inputStyle} type="text" name="name" />
          <br />
          Image Link: <input style={inputStyle} type="text" name="img" />
          <br />
          <button style={buttonStyles} type="submit">
            Create Pokemon
          </button>
        </form>
      </div>
    );
  }
}

module.exports = New;
