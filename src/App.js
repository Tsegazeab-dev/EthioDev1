import Homepage from './components/Homepage/HomePage'
import Managiment from "./components/Managament/Managiment";
import Gallery from "./components/Gallery/Gallery";
import Footer from "../src/components/Footer/Footer";
import Header from "./components/Header/Header";
import Achievements from "./components/Achievements/Achievements";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import HomePage from './components/Homepage/HomePage';
import Test from './components/Test';

function App() {
  return (
    
       <Routes>
         <Route
          path="/"
          element={
            <div>
              <Header/>
              <HomePage/>
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
        <Route
          path="/test"
          element={
            <div>
              <Header />
              <Test/>
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
