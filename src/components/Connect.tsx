import imgconnect from "../assets/download.svg" ;
import styled from 'styled-components';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
import Button from './buttuns';
import Container from './Container';
import {motion} from "framer-motion";

const Connect = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 100 }}
    whileInView={{
        opacity: 1,
        y: 1,
        transition: { delay: 0.2, duration: 0.6 },
    }}
    viewport={{ once: true, amount: 0.5 }}
    id='content'>
      <div className='title-connect relative flex flex-col items-center mb-20'>
        <h2 className='text-4xl font-medium z-10'>Content with me</h2>
        <svg className=" max-xl:hidden absolute top-[-45px] left-[830px] z-0"> {/* watch video */}
        <image height={150} width={130} href={imgconnect} />
        </svg>
      </div>
      <Container>
      <div className='flex flex-col md:flex-row justify-center items-center md:justify-around mb-32'>
        <div className='flex flex-col justify-center items-start gap-9 mb-40 w-[300] md:w-[600px]'>
          <h3 className='text-4xl font-semibold bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] bg-clip-text max-md:text-center max-md:w-full text-transparent'>Lets talk...</h3>
          <p className='text-lg my-4'>
          I would be happy if I could collaborate on a new project or be hired by a company (remotely). Contact information :
          </p>
          <IconContext.Provider value={{ size : "35px"}}>
          <div className='flex flex-col gap-4 justify-center items-start'>
            <div className='flex items-center gap-4'>
            <IoCall />
            <span> +989134389783 </span>
            </div>
            <div className='flex items-center gap-4'>
            <MdEmail />
            <span>mohammadjavadmajlesi313@gmail.com</span>
            </div>
            <div className='flex items-center gap-4'>
            <FaLocationDot />
            <span>Iran ,Esfahan , AhmadAbad St, KhajeAmid St</span>
            </div>
          </div>
          </IconContext.Provider>

        </div>
        <div>
        <form action="">
          <label htmlFor="Name" className='block mb-4 font-medium'>Your name :</label>
          <input type="text" id='Name' className='md:w-[645px] h-10 bg-slate-700 mb-7 rounded-lg p-4 focus:outline-none focus:outline-[#1e98d5] ' placeholder='Name...' />
          <label htmlFor="Email" className='block mb-4 font-medium'>Your email :</label>
          <input type="email" id='Email' className='md:w-[645px] h-10 bg-slate-700 mb-7 rounded-lg p-4 focus:outline-none focus:outline-[#1e98d5] ' placeholder='Email...' />

          <label htmlFor="Comment" className='block mb-4 font-medium'>Your comment :</label>
          <textarea rows={8} id="Comment" className='md:w-[645px] bg-slate-700 mb-7 rounded-lg p-4 focus:outline-none focus:outline-[#1e98d5] ' placeholder='Enter your massege...'></textarea>
          <Button className=' flex items-start text-xl p-3 bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] transition delay-150 hover:scale-110 ' type='submit'>Submit</Button>
         </form>
        </div>
      </div>
    </Container>
    </motion.div>
  )
}

export const StyleSvg = styled.svg`
  position: absolute;
  top: -45px;
  left: 990px ;  
  z-index: 0;

`

export default Connect