import "./App.css";
import List from "./Components/List";
import wands from "./wands";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <List wands={wands} />
    </div>
  );
}

export default App;
