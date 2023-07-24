import "./App.css";
import HomePage from "./components/Homepage/HomePage";
// import Banner from "./components/Banner";
// import Managiment from "./components/Managament/Managiment"
import Managiment from "./components/Managament/Managiment";
import Gallery from "./components/Gallery/Gallery";
import Footer from "../src/components/Footer/Footer";
import Header from "./components/Header/Header";
import Achievements from "./components/Achievements";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <HomePage />
              <Footer />
            </div>
          }
        />
        <Route
          path="/management"
          element={
            <div>
              <Header />
              <Managiment />
              <Footer />
            </div>
          }
        />
        <Route
          path="/Achievement"
          element={
            <div>
              <Header />
              <Achievements />
              <Footer />
            </div>
          }
        />
        <Route
          path="/Gallery"
          element={
            <div>
              <Header />
              <Gallery />
              <Footer />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
