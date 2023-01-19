import { Link } from "react-router-dom";

function NewHome() {
  return (
    <div className="form-container w-full h-[90vh] flex flex-col  gap-20 justify-center  items-center ">
      <h1 className="text-6xl">
        Welcome to Home Page of Authentication System
      </h1>

      <div className="flex gap-4 ">
        <Link to={"/register"}>
          <button className="w-24 h-10 text-white text-lg hover:shadow-lg bg-[#f582ae] rounded-md">
            Sign Up
          </button>
        </Link>
        <Link to={"/signin"}>
          <button className="w-24 h-10 text-white text-lg hover:shadow-lg bg-[#f582ae] rounded-md">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NewHome;
