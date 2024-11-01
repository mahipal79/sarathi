import { Link, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const { pathname } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link to="/" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </Link>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            <Link
              to="/"
              onClick={handleClick}
              className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                pathname === "/" ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
              } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              Home
            </Link>

            <Link
              to="/notes"
              onClick={handleClick}
              className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                pathname === "/notes" ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
              } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              Notes
            </Link>

            <Link
              to="/paper"
              onClick={handleClick}
              className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                pathname === "/paper" ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
              } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              Paper
            </Link>

            <Link
              to="/our-team"
              onClick={handleClick}
              className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                pathname === "/our-team" ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
              } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              Our Team
            </Link>
          </div>

          <HamburgerMenu />
        </nav>

        <Link
         
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >SOON..
         {/* to="/signup" */}
        </Link>
        <Button className="hidden lg:flex" >
        {/* href="/signin" */}
         Sarathi 2.0
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
