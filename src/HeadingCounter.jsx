import React from "react";
import UpdatedComponent from "./UpdatedComponent";

class HeadingCounter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, incrementCount } = this.props;
    return <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>;
  }
}

export default UpdatedComponent(HeadingCounter);
