import { useState } from "react";
import Container from "./Container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "./buttuns";

function Navbar() {
  const navs = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "#aboutme",
      name: "About me",
    },
    {
      id: 3,
      path: "#content",
      name: "Content",
    },
    {
      id: 4,
      path: "#work",
      name: "Work",
    },
  ];

  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <Container>
      <div className="w-full py-5 mt-4 px-8 ">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl md:text-4xl font-bold">MJ</span>
          </div>
          <div className="hidden md:flex">
            <ul className="flex flex-row items-center justify-center gap-6">
              {navs.map((nav) => (
                <li
                  key={nav.id}
                  className="font-medium text-lg md:text-xl hover:scale-105 hover:transition-all hover:duration-300 "
                >
                  <AnchorLink href={nav.path}>{nav.name} </AnchorLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex">
            <Button variant="login" className="px-3 py-4 rounded-xl hover:scale-110 hover:transition-all hover:duration-300  md:text-xl cursor-pointer">
              Sign In
            </Button>
          </div>

          {/*  mobile screen  */}

          <div className="md:hidden">
            {isNavOpen ? (
              <div
                className="flex flex-row items-center justify-center gap-1 cursor-pointer"
                onClick={toggleNav}
              >
                <div className="bg-white w-1.5 h-8 rounded-full" />
                <div className="bg-white w-1.5 h-8 rounded-full" />
                <div className="bg-white w-1.5 h-8 rounded-full" />
              </div>
            ) : (
              <div
                className="flex flex-col items-center justify-center gap-1 cursor-pointer"
                onClick={toggleNav}
              >
                <div className="bg-white h-1.5 w-8 rounded-full" />
                <div className="bg-white h-1.5 w-8 rounded-full" />
                <div className="bg-white h-1.5 w-8 rounded-full" />
              </div>
            )}
          </div>
        </div>

        <div className="my-3">
          {isNavOpen && (
            <div className="w-full">
              <ul className="flex flex-col items-center justify-center gap-2">
                {navs.map((nav) => (
                  <li
                    key={nav.id}
                    className="font-medium text-lg hover:scale-105 hover:transition-all hover:duration-300 "
                  >
                    <AnchorLink href={nav.path}>{nav.name} </AnchorLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
