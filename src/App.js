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
    titleText: {
      mainTitle: "A cup of tea is a moment of calm in the chaos of life",
      assortmentTitle: "Explore our Collections",
      revievsTitle: "What our Clients say",
      blogTitle: "Our Tea Blog",
      knowMoreTitle: "Want to know more?",
      prioriticeTitle: "We Prioritise",
    },
    paragraphTitle:
      "Wide selection of high-quality teas from all over the world, carefully curated by tea experts.",
    bloquoteText:
      "Tea is not just a drink, it's a way of life and a way to connect withour loved ones.",
    reviewsData: [
      {
        review:
          "As a tea enthusiast, I have tried teas from all over the world, but this tea store truly stands out. Their teas are of the highest quality and the variety is impressive. This is definitely a tea store that every tea lover should visit.",
        author: "Alice",
      },
      {
        review:
          "This tea store is my go-to for all my tea needs. Their selection is unbeatable and the quality of their teas is exceptional.",
        author: "Mad-Hatter",
      },
      {
        review:
          "If you're a tea lover, you must visit this tea store. The selection is vast and the quality is outstanding. I guarantee you won't be disappointed.",
        author: "Dormouse",
      },
      {
        review:
          "I am not a big tea drinker, but this tea store has converted me. I highly recommend this tea store to anyone looking for a high-quality tea experience.",
        author: "March Hare",
      },
    ],
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
          data.reviewsData,
        ]}
      ></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
