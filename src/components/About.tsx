import Container from "./Container";
import imgabout from '../assets/download.svg';
import styled from "styled-components";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import imgprof from "../assets/Prof.jpg";
import {motion} from "framer-motion";

const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{
        opacity: 1,
        y: 1,
        transition: { delay: 0.2, duration: 0.6 },
    }}
    viewport={{ once: true, amount: 0.5 }}
    id="aboutme">
      <Container>
        <div className=" relative head-about flex flex-col items-center justify-center">
          <h2 className="text-4xl font-medium z-10 ">
            About me
          </h2>
          <StyleSvg>
            <image height="150" width="130" href={imgabout} />
          </StyleSvg>
        </div>
        <div className=" my-20 flex justify-around items-center ">
          <div>
            <img src={imgprof} className="rounded-xl" width={350} alt="imageBio" />
          </div>
          <div>
            <p className="max-w-[700px] mb-10 font-medium text-[18px] leading-[26px]">
            I am Highly motivated front-end developer with a strong desire to learn 
            and grow. With 1 year of expertise in building websites and projects. 
            I think the most important thing about me is that I am a fast learner
            and flexible, which makes me fit well with any team.
            * Also, in my current situation, I am more interested in learning and gaining
            more experience, and the requested salary is not important to me
            </p>
            <div className="progress-bar">
              <div className="flex pb-3 items-center gap-5">
                <p className="min-w-[120px] font-medium text-lg">Html & Css</p>
                <hr className="h-1 w-[75%] rounded-xl bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5]  " />
              </div>
              <div className="flex pb-3 items-center gap-5">
                <p className="min-w-[120px] font-medium text-lg">Tailwind</p>
                <hr className="h-1 w-[60%] rounded-xl bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5]  " />
              </div>
              <div className="flex pb-3 items-center gap-5">
                <p className="min-w-[120px] font-medium text-lg">JavaScript</p>
                <hr className="h-1 w-[70%] rounded-xl bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5]  " />
              </div>
              <div className="flex pb-5 items-center gap-5">
                <p className="min-w-[120px] font-medium text-lg">ReactJs</p>
                <hr className="h-1 w-[80%] rounded-xl bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5]  " />
              </div>
            </div>
            <IconContext.Provider value={{ size : "50px"}}>
            <div className="flex items-center gap-7 w-full justify-center mt-9">
              <FaHtml5 />
              <FaCss3 />
              <RiTailwindCssFill />
              <IoLogoJavascript />
              <FaReact />
            </div>
            </IconContext.Provider>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};


export const StyleSvg = styled.svg`
  position: absolute;
  top: -45px;
  left: 830px ;  
  z-index: 0;

`

export default About;
