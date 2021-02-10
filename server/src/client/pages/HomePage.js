import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>Home is the best house</div>
        <button
          onClick={() => {
            console.log("clicker");
          }}
        >
          click me
        </button>
      </div>
    );
  }
}

export default {
  component: Home,
};
