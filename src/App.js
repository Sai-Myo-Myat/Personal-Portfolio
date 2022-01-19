import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
//importing components
import Nav from "./components/Nav";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Myprojects from "./components/Myprojects";
import Home from "./components/Home";
import Sidemenu from "./components/Sidemenu";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="App">
      <Router>
        <Nav menuActive={menuActive} setMenuActive={setMenuActive} />
        <div className="sections">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/myProjects" element={<Myprojects />} />
          </Routes>
        </div>
        <Sidemenu menuActive={menuActive} setMenuActive={setMenuActive} />
      </Router>
    </div>
  );
}

export default App;
