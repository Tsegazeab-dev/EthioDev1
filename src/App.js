<<<<<<< HEAD
import "./App.css";
import HomePage from "./components/Homepage/HomePage";
// import Banner from "./components/Banner";
// import Managiment from "./components/Managament/Managiment";
=======
import Homepage from './components/Homepage/HomePage'
>>>>>>> d0d5fac05e7df2b24dbc8e3e177458741eaa0e3f
import Managiment from "./components/Managament/Managiment";
import Gallery from "./components/Gallery/Gallery";
import Footer from "../src/components/Footer/Footer";
import Header from "./components/Header/Header";
import Achievements from "./components/Achievements/Achievements";
import { Route, Routes } from "react-router-dom";
import HomePage from './components/Homepage/HomePage';

function App() {
  return (
<<<<<<< HEAD
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Header />
            <Banner />
            {/* <HomePage /> */}
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
=======
    
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
        

      </Routes>

   
>>>>>>> d0d5fac05e7df2b24dbc8e3e177458741eaa0e3f
  );
}

export default App;
