import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
}

export default App;
