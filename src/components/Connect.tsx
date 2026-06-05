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
        <h2 className='text-3xl xl:text-5xl font-medium z-10'>Connect with me</h2>
      </div>
      <Container>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-around gap-8 mb-20 lg:mb-32'>
        <div className='flex flex-col justify-center items-start gap-9 w-full lg:w-auto'>
          <h3 className='text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] bg-clip-text text-center lg:text-left w-full lg:w-auto text-transparent'>Lets talk...</h3>
          <p className='text-lg text-center lg:text-left'>
          I would be happy if I could collaborate on a new project or be hired by a company (remotely). Contact information :
          </p>
          <IconContext.Provider value={{ size : "35px"}}>
          <div className='flex flex-col gap-4 justify-center md:items-start items-center'>
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
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 sm:px-6">
          <label htmlFor="Name" className='block mb-4 font-medium'>Your name :</label>
          <input type="text" id='Name' className='w-full h-10 bg-slate-700 mb-7 rounded-lg p-4 focus:outline-none focus:outline-[#1e98d5] ' placeholder='Name...' />
          <label htmlFor="Email" className='block mb-4 font-medium'>Your email :</label>
          <input type="email" id='Email' className='w-full h-10 bg-slate-700 mb-7 rounded-lg p-4 focus:outline-none focus:outline-[#1e98d5] ' placeholder='Email...' />

          <label htmlFor="Comment" className='block mb-4 font-medium'>Your comment :</label>
          <textarea rows={8} id="Comment" className='w-full bg-slate-700 mb-7 rounded-lg p-4 focus:outline-none focus:outline-[#1e98d5] ' placeholder='Enter your massege...'></textarea>
          <Button className=' flex items-start text-xl p-3 bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] transition delay-150 hover:scale-110 ' type='submit'>Submit</Button>
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