import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer";
import Black from "./img/varietiesOfTea/black.jpg";
import Green from "./img/varietiesOfTea/green.jpg";
import White from "./img/varietiesOfTea/white.jpg";
import Oolong from "./img/varietiesOfTea/oolong.jpg";
import Puerh from "./img/varietiesOfTea/pu-erh.jpg";
import Cart from "./img/icons/cart.svg";
import Search from "./img/icons/search.svg";
import User from "./img/icons/user.svg";
function App() {
  const data = {
    mainMenu: [
      { name: "Black", foto: Black },
      { name: "Green", foto: Green },
      { name: "White", foto: White },
      { name: "Oolong", foto: Oolong },
      { name: "Pu-erh", foto: Puerh },
    ],
    userActions: [{ url: Cart }, { url: User }, { url: Search }],
    mobileMenu: ["Contact Us", "Our Blog", "Shipping and Delivery"],
    titleText: "A cup of tea is a moment of calm in the chaos of life",
    paragraphTitle:
      "Wide selection of high-quality teas from all over the world, carefully curated by tea experts.",
    bloquoteText:
      "Tea is not just a drink, it's a way of life and a way to connect withour loved ones.",
  };

  return (
    <div className="App">
      <Header
        dataMenu={[data.mainMenu, data.mobileMenu, data.userActions]}
      ></Header>
      <Main
        dataText={[
          data.titleText,
          data.paragraphTitle,
          data.bloquoteText,
          data.mainMenu,
        ]}
      ></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
