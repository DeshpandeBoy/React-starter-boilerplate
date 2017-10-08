import React from "react";
import mojs from "mo-js";

const burst = new mojs.Burst({
  left: 0,
  top: 0,
  radius: { 4: 19 },
  angle: 90,
  children: {
    shape: "line",
    radius: 3,
    scale: 5,
    stroke: "#FD7932",
    strokeDasharray: "100%",
    strokeDashoffset: { "-100%": "100%" },
    duration: 700,
    easing: "quad.out"
  }
});

class Add extends React.Component {
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
      <div>
        <h1>Add</h1>
      </div>
    );
  }
}

export default Add;
