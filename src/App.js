import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Media from "./screens/Media";
import DescriptionPage from "./screens/DescriptionPage";
import DescoveryCall from "./screens/DescoveryCall"

import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/media" element={<Media />} />
      <Route exact path="/description/page/:heading" element={<DescriptionPage />} />
      <Route exact path="/descoverycall" element={<DescoveryCall />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
