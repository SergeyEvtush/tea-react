import "./App.css";
import Header from "./Components/header/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
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
