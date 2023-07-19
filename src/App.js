import "./App.css";
import './css/bootstrap.css'
import './css/styles.css'
import HomePage from "./components/Homepage/HomePage";
import Banner from "./components/Banner";
import Footer from "../src/components/Footer/Footer";
import Header from "./components/Header";
import Achievements from "./components/Achievements"

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <HomePage />
      <Footer />
      <Achievements />

    </div>
  );
}

export default App;
