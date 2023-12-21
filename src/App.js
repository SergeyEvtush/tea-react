import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  const data = ["Black", "Green", "White", "Oolong", "Pu-erh"];
  return (
    <div className="App">
      <Header data={data}></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
