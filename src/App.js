import "./App.css";
import './css/bootstrap.css'
import './css/styles.css'
// import { Routes,Route } from 'react-router-dom';
// import {BrowserRouter as Router}  from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import Banner from "./components/Banner";
import Managiment from "./components/Managament/Managiment"
import Gallery from "./components/Gallery/Gallery"
import Footer from "../src/components/Footer/Footer";
import Header from "./components/Header";
import Achievements from "./components/Achievements"

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <HomePage />
      <Managiment />
      <Achievements />
      <Gallery />
      <Footer />
      

    </div>
     

  );
}

export default App;
