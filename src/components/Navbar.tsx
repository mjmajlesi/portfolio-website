import { useState } from "react";
import Container from "./Container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "./buttuns";
import { Link } from "react-router-dom";

function Navbar() {
  const navs = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "#aboutme",
      name: "About me",
    },
    {
      path: "#content",
      name: "Content",
    },
    {
      path: "#work",
      name: "Work",
    },
  ];

  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div className={`${isNavOpen ? "Navbar" : "mb-6"}`}>
      <Container>
        <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between mt-5 text-lg">
          <div className="flex items-center justify-between w-full md:w-auto">
            <p className="font-semibold text-2xl ">MJ</p>
            <div
              onClick={toggleNav}
              className="md:hidden flex flex-col justify-between w-[2.25rem] h-[2rem]"
            >
              <span className="h-[0.4rem] w-full bg-white rounded-md"></span>
              <span className="h-[0.4rem] w-full bg-white rounded-md"></span>
              <span className="h-[0.4rem] w-full bg-white rounded-md"></span>
            </div>
          </div>

          <ul
            className={` ${isNavOpen ? "hidden" : "flex"
              } md:flex flex-col rounded-lg md:flex-row gap-4 w-full ml-5  md:gap-10 items-center bg-gray-900 md:bg-transparent `}
          >
            {navs.map((nav, index) => (
              <li className="active:text-gray-500">
                <AnchorLink
                  key={index}
                  className="anchor-link hover:text-Blue"
                  offset={50}
                  href={nav.path}
                >
                  <Link to={"/"}>{nav.name}</Link>
                </AnchorLink>
              </li>
            ))}
          </ul>
          <div className="Login max-md:hidden">
            <Button className=" bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] transition delay-150 hover:scale-110 ">
              <Link to={"/login"}>Login</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
