import React from 'react'
import profile from "../assets/photo_2024-07-10_04-59-49.jpg";
import Container from './Container';
import Button from './buttuns';

const Header = () => {
  return (
    <Container>
    <div className='Header flex justify-center flex-col items-center my-24'>
        <img src={profile} className='rounded-full' width={200} alt="profile" />
        <div className='Header-bio flex items-center justify-center flex-col my-14'>
            <p className='text-[40px] font-semibold '>
                I'm Mohammad javad Majlesi, front-end Developer from Iran.
            </p>
            <p className='text-2xl font-medium pt-10 pb-6'>
                front-end Developer,
                Computer Engineering at Hamadan University of Technology,
                Esfahan, Iran
            </p>
        </div>
        <div className='header-button flex items-center gap-8'>
            <Button variant='normal' className='p-4 rounded-2xl'>
                connect with me 
            </Button>
            <Button className=' p-4 active:rounded-2xl active:border-2 active:border-white'>
                my resume
            </Button>
        </div>
    </div>
    </Container>
  )
}

export default Header