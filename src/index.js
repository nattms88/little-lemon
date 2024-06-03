
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './Components/Nav/Nav';
import Homepage from "./Pages/Homepage/Homepage";
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import Menu from './Pages/Menu/Menu';
import Reservations from './Pages/Reservations/Reservations';
import Confirmation from './Pages/Confirmation/Confirmation';
import OrderOnline from './Pages/OrderOnline/Order';
import Login from './Pages/Login/Login';


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);