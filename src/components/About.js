import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log("Component Did Mount Parent");
  }
  render() {
    return (
      <div className="about">
        <h1>The King is going for the comback.</h1>

        <UserClass
          name={"Yash Raj Singh.class"}
          location={"Howrah-class"}
          contact={" yasheng1998@gmail.com-class "}
        />
      </div>
    );
  }
}
export default About;
