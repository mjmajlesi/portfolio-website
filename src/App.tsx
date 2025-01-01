import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
