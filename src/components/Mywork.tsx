import styled from "styled-components";
import imgwork from "../assets/download.svg";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import Container from "./Container";
import {motion} from "framer-motion"

const Mywork = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{
        opacity: 1,
        y: 1,
        transition: { delay: 0.2, duration: 0.6 },
    }}
    viewport={{ once: true, amount: 0.5 }}
    id="work">
      <Container>
        <div className="title-work relative flex flex-col items-center justify-center">
          <h2 className="text-4xl z-10 font-medium">My Work</h2>
          <svg className=" max-xl:hidden absolute top-[-45px] left-[830px] z-0"> {/* watch video */}
            <image height={150} width={130} href={imgwork} />
          </svg>
        </div>
        <div className="work my-24 flex flex-col items-center gap-20 justify-center md:flex-row md:items-center md:justify-around">
          <div className="flex flex-col items-center justify-center w-[300px] md:w-[600px]">
            <ImgHover src={image1} alt="project1" />
            <h3 className="text-2xl font-semibold my-7">Store Website</h3>
            <p className="text-xl font-medium">
              I tried to complete this project by using the popular JavaScript
              framework , Reactjs and by using the TypeScript language, Tailwind
              framework, and Material UI.
            </p>
            <a
              className=" text-center my-3 text-xl font-medium bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] bg-clip-text text-transparent"
              href="https://github.com/mjmajlesi/storeWebsite"
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
              className=" text-center my-3 text-xl font-medium bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] bg-clip-text text-transparent"
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
`

export default Mywork;
