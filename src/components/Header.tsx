import { TypeAnimation } from "react-type-animation";
import profile from "../assets/Profile.png";
import Container from './Container';
import Button from './buttuns';
import styled from 'styled-components';
import { motion } from "framer-motion";
import Navbar from "./Navbar";
const Header = () => {

  const typeanimation = [
    "front-end Developer with 1 years of experience using ReactJs and NextJs.",
    1000,
  ];

  return (
    <>
      <Navbar />
      <Container>
        <div className='Header flex justify-center flex-col items-center m-24'>
          <StyledImage src={profile} className='rounded-full' width={200} alt="profile" />
          <div className='Header-bio flex items-center justify-center flex-col my-14'>
            <p className='text-2xl md:text-3xl font-semibold '>
              <span className=' bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] bg-clip-text text-3xl md:text-4xl text-transparent'>I'm Mohammad javad Majlesi,</span> front-end Developer from Iran.
            </p>
            <p className='text-xl md:text-2xl font-medium pt-10 pb-6'>
              <TypeAnimation
                sequence={typeanimation}
                speed={50}
                repeat={Infinity}
              />
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 1,
              transition: { delay: 0.4, duration: 1.2 },
            }}
            viewport={{ once: true, amount: 0.5 }}
            className='header-button flex items-center gap-4 md:gap-8'>
            <Button variant='normal' className='p-3 md:p-4 text-sm md:text-base rounded-2xl'>
              connect with me
            </Button>
            <a href="/Resume.pdf" download>
              <Button className='p-4 active:rounded-2xl active:border-2 hover:border-[#1e98d5]'>
                my resume
              </Button>
            </a>

          </motion.div>
          <DivtopBlur />
          <DivbotBlur />
        </div>
      </Container>
    </>
  )
}

const StyledImage = styled.img`
    animation-name:  floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    @keyframes floating {
  0% {
    transform: translate(0 , 0px);
  }
  50% {
    transform: translate(0 , 10px);
  }
  100%{
    transform: translate(0 , -0px);
  }

}
` ;

export const DivtopBlur = styled.div`
    position: absolute;
    width: 25vw;
    height: 25vw;
    min-width: 350px;
    min-width: 350px;
    top: -128px;
    left: 10vw;
    border-radius: 764px;
    background: rgba(25 , 55 , 109 , 0.7);
    filter: blur(100px);
    z-index: 0;
`
export const DivbotBlur = styled.div`
    position: absolute;
    width: 20vw;
    height: 20vw;
    min-width: 350px;
    min-width: 250px;
    bottom: 0px;
    right: 0vw;
    border-radius: 764px;
    background: rgba(25 , 55 , 109 , 0.7);
    filter: blur(100px);
    z-index: 0;
`

export default Header