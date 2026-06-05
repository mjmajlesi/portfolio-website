import { Route, Routes } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </MotionConfig>
  );
}

export default App;
