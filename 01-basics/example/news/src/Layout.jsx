import Navigation from './components/Navigation/Navigation.jsx';
import Article from './components/Article/Article';
import Aside from './components/Aside/Aside.jsx';
import Footer from './components/Footer/Footer.jsx';
import './Layout.css';

function Layout() {
	return (
		<>
			<div className="Layout">
				<div className="navigation">
					<Navigation />
				</div>
				<div className="site_content">
					<div className="article">
						<Article />
					</div>
					<div className="aside">
						<Aside />
					</div>

					<div className="footer">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
}

export default Layout;
