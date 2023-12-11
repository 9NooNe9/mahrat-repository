import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/index.js";
import "./App.scss";
import Home from "./components/Home/index.js";
import About from "./components/About/index.js";
import Conatct from "./components/Contact/index.js";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Conatct />} />
      </Route>
    </Routes>
  );
};

export default App;
