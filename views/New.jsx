const React = require("react");
const DefaultLayout = require("./layouts/Default");

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
  backgroundColor: "white",
};

const formStyles = {
  fontSize: "25px",
  width: "50%",
};

const inputStyle = {
  fontSize: "20px",
  marginBottom: "20px",
};

const linkStyles = {
  textDecoration: "none",
  color: "white",
  fontSize: "20px",
};

const footerStyles = {
  display: "flex",
  justifyContent: "space-evenly",
};

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="New Pokemon page">
        <form style={formStyles} action="/pokemon" method="POST">
          Name: <input style={inputStyle} type="text" name="name" />
          <br />
          Image Link: <input style={inputStyle} type="text" name="img" />
          <br />
          <div style={footerStyles}>
            <a style={linkStyles} href="/pokemon">
              <div style={buttonStyles}>Back</div>
            </a>
            <button style={buttonStyles} type="submit">
              Create Pokemon
            </button>
          </div>
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = New;
