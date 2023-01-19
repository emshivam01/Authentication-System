import "./App.css";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NewHome from "./Components/NewHome";
// import createContext from "react";
// export const MyContext = createContext();
// import Testing from "./Components/Testing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
