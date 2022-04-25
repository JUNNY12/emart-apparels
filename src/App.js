import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop"
import Insights from "./pages/insights/Insights"
import Contact from "./pages/contact/Contact"
import ShoppingCart from "./pages/shoppingcart/ShoppingCart"
import About from "./pages/about/About"
import TrackOrders from "./pages/shoppingcart/TrackOrders";
import SignIn from "./pages/shoppingcart/SignIn";
import Favorite from "./pages/shoppingcart/Favourites";
import Shoes from "./pages/shop/Shoe";
import Accessories from "./pages/shop/Accessories";
import Clothes from "./pages/shop/Clothes";


const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route path="/" element= {<Home />} />
              <Route path="shop" element ={<Shop />} />
              <Route path="about" element = {<About />} />
              <Route path ="insights" element ={<Insights />} />
              <Route path="contact" element ={<Contact />} />
              <Route path="cart" element={<ShoppingCart />} />
              <Route path="trackorders" element={<TrackOrders />} />
              <Route path="signin"  element={<SignIn />}/>
              <Route path="favorite" element={<Favorite />} />
              <Route path="shoes" element={<Shoes />} />
              <Route path="accessories" element={<Accessories />} />
              <Route path="clothes" element={<Clothes />} />
              
          </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default App;
