import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Certificates from "./certificate";
import Portfolio from "./portfoli";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;