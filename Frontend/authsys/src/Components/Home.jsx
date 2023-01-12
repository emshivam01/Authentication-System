import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="form-container w-full h-[90vh] flex flex-col  gap-20 justify-center  items-center ">
      <h1 className="text-6xl">Welcome to Dashboard</h1>

      <div>
        <Link to={"/signup"}>
          <button className="py-4 px-8  text-white text-lg hover:shadow-lg bg-[#f582ae] rounded-md">
            Log out
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
