// import "./Signup.jsx";
import { MyContext } from "./Signup";
import { useContext } from "react";

function Testing() {
  const name = useContext(MyContext);
  return (
    <div>
      <h1>This is my firstname {name.firstname}</h1>
    </div>
  );
}

export default Testing;
