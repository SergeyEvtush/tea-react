import "./App.css";
import Header from "./Components/header/Header";
import Main from "./Components/main/Main";
import Footer from "./Components/Footer";
function App() {
	const data = {
		mainMenu: ["Black", "Green", "White", "Oolong", "Pu-erh"],
		mobileMenu: ["Contact Us", "Our Blog", "Shipping and Delivery"],
		titleText: "A cup of tea is a moment of calm in the chaos of life",
		paragraphTitle: "Wide selection of high-quality teas from all over the world, carefully curated by tea experts.",
		bloquoteText: "Tea is not just a drink, it's a way of life and a way to connect withour loved ones."
	};

	return (
		<div className="App">
			<Header dataMenu={data}></Header>
			<Main dataText={[data.titleText, data.paragraphTitle, data.bloquoteText]}></Main>
			<Footer></Footer>
		</div>
	);
}

export default App;
