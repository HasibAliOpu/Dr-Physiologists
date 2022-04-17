import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Login from "./Pages/Login/Login";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
