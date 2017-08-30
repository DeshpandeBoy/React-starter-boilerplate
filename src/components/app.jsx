import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: ""
    };

    this.handleName = this.handleName.bind(this);
    this.handleValue = this.handleValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleValue(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "A name was submitted: " + this.state.name + "and" + this.state.value
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="text">
          Name:
          <input
            type="text"
            name={this.state.name}
            onChange={this.handleName}
          />
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleValue}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
