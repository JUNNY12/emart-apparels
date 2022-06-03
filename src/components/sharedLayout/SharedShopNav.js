import ShoppingCartNav from "../shoppingCartNav/ShoppingCart-Nav";
import { Outlet } from "react-router-dom";
import Header from "../shoppingCartNav/ShoppingCart-header";



import React from 'react'

const SharedShopNav = () => {
  return (
    <>
         <div><Header /></div>
         <ShoppingCartNav />
        <Outlet />
    </>
  )
}

export default SharedShopNav