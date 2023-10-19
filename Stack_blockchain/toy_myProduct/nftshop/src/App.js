import "./App.css";
import { Router, Routes, Route, Link } from "react-router-dom";
import MyPage from "./pages/MyPage/MyPage";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </>
  );
}

export default App;
