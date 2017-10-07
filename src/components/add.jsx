import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: ""
    };
  }

  render() {
    return (
        <div>
        <h1>Add</h1>
        </div>
    );
  }
}

export default Add;
