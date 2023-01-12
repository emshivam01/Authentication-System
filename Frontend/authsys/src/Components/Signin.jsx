import "./Signup.css";
import { Link } from "react-router-dom";

function Signip() {
  return (
    <div className="form-container w-full h-[90vh] flex justify-center items-center ">
      <form
        action=""
        className="form flex flex-col justify-around w-96 h-[450px] shadow-xl rounded-xl p-10"
      >
        <input
          type={"email"}
          className="h-10 rounded-md p-4 focus:shadow-lg border-2 border-gray-300 outline-none text-lg placeholder:text-black"
          placeholder="Email"
        />
        <input
          type={"password"}
          className="h-10 rounded-md p-4 focus:shadow-lg border-2 border-gray-300 outline-none text-lg placeholder:text-black"
          placeholder="Password"
        />

        <button className="w-full h-10 text-white text-lg hover:shadow-lg bg-[#f582ae] rounded-md">
          Sign in
        </button>

        <p className="text-center">OR</p>

        <Link to={"/"}>
          <button className="w-full h-10 text-white text-lg hover:shadow-lg bg-[#f582ae] rounded-md">
            Sign up
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Signip;
