import "./App.css";
import './css/bootstrap.css'
import './css/styles.css'
import HomePage from "./HomePage";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
