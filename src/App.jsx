import SiteNav from "./layout/SiteNav"
import { Routes, Route } from "react-router-dom"
import Homepage from "./views/Homepage"
import AboutUs from "./views/AboutUs"
import FAQ from "./views/FAQ"
import Footer from "./layout/Footer"
import ContactUs from "./views/ContactUs"

const App = () => {
  return (
    <div>
      <SiteNav />

      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/about" Component={AboutUs} />
        <Route path="/contact_uc" Component={ContactUs} />
        <Route path="/faq" Component={FAQ} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App