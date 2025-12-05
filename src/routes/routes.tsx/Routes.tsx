
import {Route, Routes} from "react-router"
import Home from "../home/Home"
import About from "../about/About"
import ThemeToggle from "../../components/theme-button/ThemeToggle"
import Contact from "../contact/Contact"
export default function AllRoutes() {
  return (
    <>
    <div>
        <h1>Hii Abhishek </h1>
        <ThemeToggle/>
    </div>
    <Routes>
     <Route  path="/" element = {<Home />} index />   
     <Route path = "/about" element = {<About/>} />
     <Route path="/contact" element = {<Contact/>} />
    </Routes>
    </>
  )
}
