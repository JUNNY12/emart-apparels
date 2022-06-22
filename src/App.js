import { Route, Routes } from "react-router-dom";
import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop"
import Insights from "./pages/insights/Insights"
import Contact from "./pages/contact/Contact"
import ShoppingCart from "./pages/shoppingcart/ShoppingCart"
import About from "./pages/about/About"
import TrackOrders from "./pages/shoppingcart/TrackOrders";
import Favorite from "./pages/shoppingcart/Favourites";
import Shoes from "./pages/shop/Shoe";
import Accessories from "./pages/shop/Accessories";
import Clothes from "./pages/shop/Clothes";
import SharedLayout from "./components/sharedLayout/SharedLayout";
import SharedShopNav from "./components/sharedLayout/SharedShopNav";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import SignUpForm from "./components/form/SignUpForm";
import SignInForm from "./components/form/SignInForm";
import {useState } from "react";
import { CartProvider } from "react-use-cart";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import { ScrollToTop } from "./components/ScrollToTop";





const App = () => {

  const [user, setUser] = useState(null)

  return (
    <div className="app">
        <CartProvider>
           <ScrollToTop />
           <Routes>
              
              <Route path="/" element={<SharedLayout />}>
                
                  <Route index element= {<Home />} />
                  <Route path="*" element={<PageNotFound />} />
                  <Route path="signUp" element={<SignUpForm />} />
                  <Route path="signIn" element={<SignInForm 
                    setUser={setUser}>
                    </SignInForm>} 
                  />

                  <Route path="shop" element={<SharedShopNav />}>
                      <Route index element= {

                          <ProtectedRoute user={user}>
                            <Shop user={user}/>
                          </ProtectedRoute>
                      }
                    />

                      <Route path="shoes" element={<Shoes />} />
                      <Route path="accessories" element={<Accessories />} />
                      <Route path="clothes" element={<Clothes />} />
                      <Route path="trackorders" element={<TrackOrders />} />
                      <Route path="favorite" element={<Favorite />} />
                      <Route path="cart" element={<ShoppingCart />} />
                      <Route path=":itemId"  element={<SingleProduct />}/>
                  </Route>

                  <Route path="about" element = {<About />} />
                  <Route path ="insights" element ={<Insights />} />
                  <Route path="contact" element ={<Contact />} />      
              </Route>
            
          </Routes>  

        </CartProvider>
    </div>
  )
}

export default App;
