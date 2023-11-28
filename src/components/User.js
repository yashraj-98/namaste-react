import { useState } from "react";

const User = (props) => {
  const { name, location, contact } = props;
  const [count] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="user-card">
      <h2>Count : {count}</h2>
      <h2>Count2 : {count2}</h2>
      <h2>Name : {name}</h2>
      <h2>Location: {location}</h2>
      <h2>Contact : {contact}</h2>
    </div>
  );
};
export default User;
