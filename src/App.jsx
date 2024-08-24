import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from"./components/Pages/Home";
import Notes from "./components/Pages/Notes";
import Paper from "./components/Pages/Paper";
import OurTeam from "./components/pages/OurTeam";

import Cse from "./components/pages/Cse"
import Bba from "./components/pages/Bba"
import Bca from "./components/pages/Bca"
import Chemical from "./components/pages/Chemical"
import BioTech from "./components/pages/BioTech"
import Fehs from "./components/pages/Fehs"
import GetStart from "./components/pages/Getstart";


const App = () => {

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">

        <Header />
        

        <Routes >
          <Route path="/" element={<Home/>}/>
          <Route path="/notes" element={<Notes/>}/>
          <Route path="/paper" element={<Paper/>}/>
          <Route path="/our-team" element={<OurTeam/>}/>
          <Route path="/getstart" element={<GetStart/>}/>
         


          <Route path="/cse" element={<Cse/>}/>
          <Route path="/bba" element={<Bba/>}/>
          <Route path="/bca" element={<Bca/>}/>
          <Route path="/chemical-engineering" element={<Chemical/>}/>
          <Route path="/fehs" element={<Fehs/>}/>
          <Route path="/bio-tech" element={<BioTech/>}/>   


          </Routes>
          
          <Footer/>
       
      </div>
      <ButtonGradient />
      </>
  );
};

export default App;
