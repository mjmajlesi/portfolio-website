import styled from "styled-components";
import imgwork from "../assets/download.svg";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import Container from "./Container";
import { motion } from "framer-motion";
import { useState } from "react";

const Mywork = () => {
  const [Open, SetOpen] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 50,
        transition: { delay: 0.2, duration: 0.6 },
      }}
      viewport={{ once: false, amount: 0.5 }}
      id="work"
    >
      <Container>
        <div className="title-work relative flex flex-col items-center justify-center">
          <h2 className="text-4xl z-10 font-medium">My Work</h2>
          <svg className=" max-xl:hidden absolute top-[-45px] left-[830px] z-0">
            {" "}
            {/* watch video */}
            <image height={150} width={130} href={imgwork} />
          </svg>
        </div>
        <div className="work my-24 grid grid-cols-2 grid-rows-2 justify-items-center">
          <div className="flex flex-col items-center justify-center w-[300px] md:w-[600px]">
            <ImgHover src={image1} alt="project1" />
            <h3 className="text-2xl font-semibold my-7">Store Website</h3>
            <p className="text-xl font-medium">
              I tried to complete this project by using the popular JavaScript
              framework , Reactjs and by using the TypeScript language, Tailwind
              framework, and Material UI.
            </p>
            <a
              className=" text-center my-3 text-xl font-medium bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] text-white px-4 py-3 rounded-xl text-transparent"
              href="https://github.com/mjmajlesi/storeWebsite"
              target="_blank"
            >
              info more
            </a>
          </div>
          <div className="flex flex-col items-center justify-center w-[300px] md:w-[600px]">
            <ImgHover src={image3} alt="project1" />
            <h3 className="text-2xl font-semibold my-7">Forooghteb Website</h3>
            <div>
              <p
                className={`text-xl font-medium ${
                  Open == false && "line-clamp-3"
                }`}
              >
                This project was developed for FroghTeb Ronak Sina, utilizing
                TypeScript and the Next.js framework for the frontend, and
                Python with Django REST Framework for the backend. The web
                application features a modern, visually appealing, and fully
                responsive design, ensuring a seamless and user-friendly
                experience across all devices. The implementation emphasizes
                both functionality and professionalism, making it suitable for
                formal use in a medical equipment context
              </p>{" "}
              <span
                onClick={() => SetOpen(!Open)}
                className="text-lg font-medium bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] bg-clip-text text-transparent cursor-pointer"
              >
                {Open == false ? "Read More..." : "Back"}
              </span>
            </div>
            <a
              className=" text-center my-3 text-xl font-medium bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] text-white px-4 py-3 rounded-xl text-transparent"
              href="https://forooghteb.ir/"
              target="_blank"
            >
              info more
            </a>
          </div>
          <div className="flex flex-col items-center justify-center w-[300px] md:w-[600px]">
            <ImgHover src={image2} alt="project2" />
            <h3 className="text-2xl font-semibold my-7">Recipe Website</h3>
            <p className="text-xl font-medium">
              I tried to complete this project by using the popular JavaScript
              framework , Reactjs and by using the TypeScript language, Tailwind
              framework and Lottiefiles animations. <br />
            </p>
            <a
              className=" text-center my-3 text-xl font-medium bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] text-white px-4 py-3 rounded-xl text-transparent"
              href="https://github.com/mjmajlesi/resipe-website"
              target="_blank"
            >
              info more
            </a>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

const ImgHover = styled.img`
  border-radius: 10px;
  box-sizing: border-box;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
    border: 4px solid #1e98d5;
  }
`;

export default Mywork;
