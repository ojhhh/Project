import "./App.css";
import { Main, Sign } from "./components/layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/posts" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
