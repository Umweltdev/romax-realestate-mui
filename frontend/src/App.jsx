import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ProductList from "./pages/product-list";
import Product from "./pages/product-description";
import Register from "./pages/Register";
import Login from "./pages/Login";
//import Cart from "./pages/Cart";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Reset from "./pages/Reset";
import Estate from "./pages/estate-description";
import Filtered from "./pages/Filtered";
import UserDashBoard from "./pages/user-dashboard";
import About from "./pages/About";
function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/success" element={<Success />} />
          <Route path="/products" element={<ProductList />} />
          {/* <Route path="/products" element={<Filtered />} /> */}
          <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/estate/:id" element={<Estate />} />
                  <Route path="/reset" element={<Reset />} />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/user/*" element={<UserDashBoard />} />
         
        </Routes>
      </LocalizationProvider>
    </Router>
  );
}

export default App;
