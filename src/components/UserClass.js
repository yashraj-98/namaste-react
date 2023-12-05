import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Krishna",
        location: "Swarg",
      },
    };
  }
  async componentDidMount() {
    // console.log("Component Did Mount Child");
    //API Call

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <input value={name}></input>
        <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h2>Location:{location}</h2>
        {/* <h2>Contact :{contact}</h2> */}
      </div>
    );
  }
}
export default UserClass;
