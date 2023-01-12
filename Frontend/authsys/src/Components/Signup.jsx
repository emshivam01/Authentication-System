import "./Signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
const MyContext = React.createContext();

function Signup() {
  // <MyContext.Provider value={{firstname, lastname}}></MyContext.Provider>
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const updateFirstname = (event) => {
    setfirstname(event.target.value);
  };

  const updateLastname = (event) => {
    setlastname(event.target.value);
  };

  const updateEmail = (event) => {
    setemail(event.target.value);
  };

  const updatePass = (event) => {
    setpassword(event.target.value);
  };

  return (
    <div className="form-container w-full h-[90vh] flex justify-center items-center ">
      <form
        method=""
        action=""
        className="form flex flex-col justify-around w-96 h-[450px] shadow-xl rounded-xl p-10"
      >
        <input
          value={firstname}
          onChange={updateFirstname}
          type={"text"}
          name="firstname"
          className="h-10 rounded-md p-4 focus:shadow-lg border-2 border-gray-300 outline-none text-lg placeholder:text-black"
          placeholder="Firstname"
        />
        <input
          value={lastname}
          onChange={updateLastname}
          type={"text"}
          className="h-10 rounded-md p-4 focus:shadow-lg border-2 border-gray-300 outline-none text-lg placeholder:text-black"
          placeholder="Lastname"
        />
        <input
          value={email}
          onChange={updateEmail}
          type={"email"}
          className="h-10 rounded-md p-4 focus:shadow-lg border-2 border-gray-300 outline-none text-lg placeholder:text-black"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={updatePass}
          type={"password"}
          className="h-10 rounded-md p-4 focus:shadow-lg border-2 border-gray-300 outline-none text-lg placeholder:text-black"
          placeholder="Password"
        />
        <button className="w-full h-10 text-white text-lg hover:shadow-lg bg-[#f582ae] rounded-md">
          Sign up
        </button>

        <p className="text-center">OR</p>

        <Link to={"/signin"}>
          <button className="w-full h-10 text-white text-lg hover:shadow-lg bg-[#f582ae] rounded-md">
            Sign in
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Signup;
