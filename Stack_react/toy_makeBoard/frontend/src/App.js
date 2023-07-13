import "./App.css";
import { Main, Sign, Posts, PostInsert, PostDetail } from "./components/layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/insert" element={<PostInsert />} />
        <Route path="/detail/:id" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
