
import Benefits from "../Benefits";
import Collaboration from "../Collaboration";

import Hero from "../Hero";
import Demand from "../Demand";

const Home = () => {
  return (
    <>
      
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero/>
        <Benefits />
        <Collaboration />
        <Demand />
      
      </div>
      </>
  )
}

export default Home