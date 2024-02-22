import SiteNav from "./layout/SiteNav"
import { Routes, Route } from "react-router-dom"
import Homepage from "./views/Homepage"
import About from "./views/About"
import FAQ from "./views/FAQ"
import Footer from "./layout/Footer"
import ContactUs from "./views/ContactUs"
import { useTranslation } from "react-i18next"
import Search from "./views/Search"

const App = () => {

  let { i18n } = useTranslation()
  return (
    <div className={i18n.language === 'ar' ? "rtl" : ""}>
      <SiteNav />

      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/about" Component={About} />
        <Route path="/contact_uc" Component={ContactUs} />
        <Route path="/faq" Component={FAQ} />
        <Route path="/search" Component={Search} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App