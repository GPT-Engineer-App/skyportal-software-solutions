import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import OurMission from "./pages/OurMission.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/mission" element={<OurMission />} />
      </Routes>
    </Router>
  );
}

export default App;
