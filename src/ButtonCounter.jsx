import React from "react";
import UpdatedComponent from "./UpdatedComponent";

class ButtonCounter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}>Clicked {count} times</button>;
  }
}

export default UpdatedComponent(ButtonCounter);
