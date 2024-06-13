import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavighationBar />} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Routes>
    </div>
  );
}

export default App;
