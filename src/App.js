import Home from "./Pages/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import Stratergist from "./Pages/Stratergist";
import Footer from "./components/Footer";
import Optimizer from "./Pages/Optimizer";
import Community from "./Pages/Community";
import EarlyAccess from "./Pages/EarlyAccess";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stratergy" element={<Stratergist/>}/>
          <Route path="/optimizer" element={<Optimizer/>}/>
          <Route path="/community" element={<Community/>}/>
          <Route path="/early" element={<EarlyAccess/>}/>
        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
