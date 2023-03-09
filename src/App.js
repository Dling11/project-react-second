import "./App.scss";
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        
      </Routes>
    </>
  )
}

export default App

//contact form ===> npm i @emailjs/browser

//==============>  npm i @fortawesome/free-brands-svg-icons

//==== Navigation ========> npm i @fortawesome/free-solid-svg-icons

//==================> npm i @fortawesome/react-fontawesome

//======== Animation ========> npm i animate.css

//==========> Advance animation ==> npm i gsap-trial

//=======Loaders Packman loader ====> npm i loaders.css

//====About map==> npm i react-leaflet

//==========> npm i react-loaders

//=========> using Saas ========> npm i sass