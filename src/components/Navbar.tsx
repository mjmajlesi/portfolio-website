import React from "react";
import Container from "./Container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "./buttuns";

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
  return (
    <div className="Navbar">
      <Container>
        <div className="flex justify-between items-center mt-5 text-lg">
          <p className="font-semibold text-2xl ">MJ</p>
          <ul className="flex gap-10 items-center">
            {navs.map((nav, index) => (
              <li className="active:text-Blue">
                <AnchorLink
                  key={index}
                  className="anchor-link hover:text-Blue"
                  offset={50}
                  href={nav.path}
                >
                  {nav.name}
                </AnchorLink>
              </li>
            ))}
          </ul>
          <div className="Login" >
            <Button className=" bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] transition delay-150 hover:scale-110 ">Login</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
