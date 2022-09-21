import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cart from "./pages/Cart";
import CartItems from "./pages/CartItems";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartItems />} />
          <Route path="*" element={<Navigate to="/notFound"  />} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
