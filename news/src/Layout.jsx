import Navigation from "./components/Navigation/Navigation.jsx";
import './Layout.css'

function Layout() {

  return (
    <>
    <div className="Layout">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="site_content">
        <div className="article"></div>
        <div className="aside"></div>
        <div className="footer"></div>
      </div>
    </div>
    </>
  )
}

export default Layout
