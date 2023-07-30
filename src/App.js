import "./App.css";
import Managiment from "./components/Managament/Managiment";
import Gallery from "./components/Gallery/Gallery";
import Footer from "../src/components/Footer/Footer";
import Header from "./components/Header/Header";
// import Banner from "./components/Banner/Banner"
import Achievements from "./components/Achievements/Achievements";
import { Route, Routes } from "react-router-dom";
// import HomePage from "./components/Homepage/HomePage";

function App() {
  return (
    <Routes>
      <Route>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Banner />
              <HomePage />
              <Footer />
            </div>
          }
        />
        <Route
          path="/HomePage"
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
              {/* <Footer /> */}
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
      </Route>
      <Route>
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
          path="/about-us"
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
      </Route>
    </Routes>
  );
}

export default App;
