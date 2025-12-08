
import {Route, Routes} from "react-router"
import Home from "../home/Home"
import About from "../about/About"
// import ThemeToggle from "../../components/theme-button/ThemeToggle"
import Headers from "../../components/nav/Navbar.js"
import Contact from "../contact/Contact"
import User from "../user/User.js"
export default function AllRoutes() {
  return (
    <>
    <div>
     <Headers/>
    </div>
    <Routes>
     <Route  path="/" element = {<Home />} index />   
     <Route path = "/about" element = {<About/>} />
     <Route path="/contact" element = {<Contact/>} />
     <Route path="*" element= {<div>404 Not Found</div>} />
     <Route path="/user" element = {<User/>} />
     {/* <Route path="/create-user" element = {<CreateUser/>} /> */}
    </Routes>
    </>
  )
}
