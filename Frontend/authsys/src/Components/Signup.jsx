import "./Signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";

function Signup() {
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

  //  Sending Data to Database

  const postData = async (event) => {
    event.preventDefault();

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.status === 420 || !data) {
      const err = res.send;
      if (err) {
        window.alert(err);
      } else {
        window.alert("User Already Exist");
      }
    } else {
      window.alert("Registration Successfull");
      window.location.href = "/signin";
    }
  };

  return (
    <div className="form-container w-full h-[90vh] flex justify-center items-center ">
      <form
        onSubmit={postData}
        method="POST"
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
          name="lastname"
          className="h-10 rounded-md p-4 focus:shadow-lg border-2 border-gray-300 outline-none text-lg placeholder:text-black"
          placeholder="Lastname"
        />
        <input
          value={email}
          onChange={updateEmail}
          type={"email"}
          name="email"
          className="h-10 rounded-md p-4 focus:shadow-lg border-2 border-gray-300 outline-none text-lg placeholder:text-black"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={updatePass}
          type={"password"}
          name="password"
          className="h-10 rounded-md p-4 focus:shadow-lg border-2 border-gray-300 outline-none text-lg placeholder:text-black"
          placeholder="Password"
        />

        <input
          className="w-full h-10 text-white text-lg hover:shadow-lg bg-[#f582ae] rounded-md"
          type={"submit"}
          value={"Sign Up"}
        />

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
