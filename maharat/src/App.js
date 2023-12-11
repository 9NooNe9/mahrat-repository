import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/index.js";
import "./App.scss";
import Home from "./components/Home/index.js";
import About from "./components/About/index.js";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
