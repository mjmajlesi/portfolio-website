import Container from "./Container";
import imgabout from '../assets/download.svg';
import styled from "styled-components";

const About = () => {
  return (
    <div>
      <Container>
        <div className=" relative head-about flex flex-col items-center justify-center">
          <h2 className="text-4xl font-medium z-10 ">
            About me
          </h2>
          <StyleSvg>
            <image height="150" width="130" href={imgabout} />
          </StyleSvg>
        </div>
        <div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </Container>
    </div>
  );
};


const StyleSvg = styled.svg`
  position: absolute;
  top: -45px;
  left: 830px ;  
  z-index: 0;

`

export default About;
