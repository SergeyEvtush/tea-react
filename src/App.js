import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer";
function App() {
  const dataMenu = {
    mainMenu: ["Black", "Green", "White", "Oolong", "Pu-erh"],
    mobileMenu: ["Contact Us", "Our Blog", "Shipping and Delivery"],
  };

  return (
    <div className="App">
      <Header dataMenu={dataMenu}></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
