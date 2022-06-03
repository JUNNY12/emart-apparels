import { Outlet } from "react-router-dom"
import Nav from "../nav/Nav"
import Footer from "../footer/Footer"



const SharedLayout = () => {
  return (
  
    <>
        <Nav />
        <Outlet />
        <Footer />
    </>
  )
}

export default SharedLayout