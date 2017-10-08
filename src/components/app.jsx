import React from "react";
import mojs from "mo-js";

const elem = document.querySelector('anime')
const burst = new mojs.Burst({
  parent: elem,
  left: 0,
  top: 0,
  radius: { 4: 19 },
  angle: 45,
  children: {
    shape: "line",
    radius: 3,
    scale: 1,
    stroke: "#FD7932",
    strokeDasharray: "100%",
    strokeDashoffset: { "-100%": "100%" },
    duration: 700,
    easing: "quad.out"
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: ""
    };
  }
  componentDidMount() {
    document.addEventListener("click", e => {
      burst.tune({ x: e.pageX, y: e.pageY }).play();
    });
  }

  componentWillUnmount() {
    document.addEventListener("click", e => {
      burst.tune({ x: e.pageX, y: e.pageY }).stop();
    });
  }

  render() {
    return (
      <div id="anime">
        <h1>hello</h1>
      </div>
    );
  }
}

export default App;
