import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from"./components/Pages/Home"
import Notes from "./components/Pages/Notes"
import Paper from "./components/Pages/Paper"
import OurTeam from "./components/pages/OurTeam"


const App = () => {
  return (
  
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes >
          <Route path="/" element={<Home/>}/>
          <Route path="/notes" element={<Notes/>}/>
          <Route path="/paper" element={<Paper/>}/>
          <Route path="//our-team" element={<OurTeam/>}/>

          </Routes>
          
          <Footer/>
       
      </div>
      <ButtonGradient />
      </>
  );
};

export default App;
