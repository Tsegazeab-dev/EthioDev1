
import './App.css'
// import './css/bootstrap.css'
import './css/styles.css'
// import HomePage from "./components/Homepage/HomePage";
// import Managiment from "./components/Managament/Managiment"

// import "./App.css";
import HomePage from "./components/Homepage/HomePage";
import Managiment from "./components/Managament/Managiment";
import Gallery from "./components/Gallery/Gallery";
import Footer from "../src/components/Footer/Footer";
import Header from "./components/Header/Header";
import Achievements from "./components/Achievements/Achievements";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    
       <Routes>
       
        <Route
          path="/"
          element={
            <div>
              <Header />
              {/* <Banner/> */}
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

   
  );
}

export default App;
