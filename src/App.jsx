import SiteNav from "./layout/SiteNav"
import { Routes, Route } from "react-router-dom"
import Homepage from "./views/Homepage"
import About from "./views/About"
import FAQ from "./views/FAQ"
import Footer from "./layout/Footer"
import Contact from "./views/Contact"
import { useTranslation } from "react-i18next"
import Search from "./views/Search"
import Airplane from "./components/main_sections/Airplane"
import Bus from "./components/main_sections/Bus"
import Train from "./components/main_sections/Train"

const App = () => {

  let { i18n } = useTranslation()
  return (
    <div className={i18n.language === 'ar' ? "rtl" : ""}>
      <SiteNav />

      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/faq" Component={FAQ} />
        <Route path="/search" Component={Search} />
        {/* In main page */}
        <Route path="/airplane" Component={Airplane} />
        <Route path="/bus" Component={Bus} />
        <Route path="/train" Component={Train} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App