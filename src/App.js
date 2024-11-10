import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/navbar";
import Project from "./pages/project";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/Project" element={<Project />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
