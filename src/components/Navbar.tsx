import React from "react";
import Container from "./Container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "./buttuns";
import logo from "../assets/photo_2024-07-10_04-59-49.jpg"

function Navbar() {
  const navs = [
    {
      path: "#home",
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
    <div>
      <Container>
        <div className="flex justify-between items-center mt-2">
          <img src={logo} alt="logo"
          className="rounded-2xl" width="40px" />
          <ul className="flex gap-10 items-center">
            {
              navs.map((nav , index) => (
              <AnchorLink
                key={index}
                className="anchor-link"
                offset={50}
                href={nav.path}
              >{nav.name}</AnchorLink>
            ))
            }
          </ul>
          <Button variant="login">
            Login
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
