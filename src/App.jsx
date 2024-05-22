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
import Problems from "./views/Problems"

const App = () => {
  let x = 0;

  let { i18n } = useTranslation()
  return (
    <div className={i18n.language === 'ar' ? "rtl" : ""}>
      <SiteNav />

      <div className="main_content">
        <Routes>
          <Route path="/" element={<Homepage /> } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/search" element={<Search />} />
          <Route path="/airplane" element={<Airplane />} />
          <Route path="/bus" element={<Bus />} />
          <Route path="/train" element={<Train />} />
          <Route path="/problems" element={<Problems />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App