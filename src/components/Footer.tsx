import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa"
import Button from "./buttuns"
import Container from "./Container"
import { IconContext } from "react-icons"

const Footer = () => {
  return (
    <div>
        <Container>
            <div className="flex items-center gap-10 lg:justify-between mb-5">
                <div className="flex flex-col items-start justify-start w-[200px] pr-3">
                    <span className="text-4xl font-semibold my-3">
                        MJ
                    </span>
                    <p className=" text-sm md:font-medium">
                    I am 19 years old and was born in Isfahan. I am currently a computer engineering student at Hamedan University of Technology.
                    </p>
                </div>
                <div className="w-[100px] flex items-center gap-5 mt-9">
                    <input type="search" className="max-w-[100px] lg:w-[200px] h-9 bg-slate-600 rounded-lg p-3 focus:outline-none focus:outline-[#1e98d5]"  placeholder="Search..." />
                    <Button className=" rounded-lg bg-gradient-to-r from-[#1d1d9a] to-[#1e98d5] transition delay-150 hover:scale-110">Search</Button>
                </div>
            </div>
            <hr />
        <div className="flex items-center gap-10 lg:justify-between mt-5">
            <span className="text-xs md:font-semibold">
            © 2024 Copyright: Mohammad Javad Majlesi
            </span>
            <IconContext.Provider value={{ size : "30px"}}>
                <div className="flex items-center gap-3">
                    <a href="https://github.com/mjmajlesi" target="_blank"><FaGithub /></a>
                    <a href="https://t.me/Mj_majlesi" target="_blank"><FaTelegramPlane /></a>
                    <a href="https://www.linkedin.com/in/mohammad-javad-majlesi-0ab27331a/" target="_blank"><FaLinkedinIn /></a>
                </div>
            </IconContext.Provider>
        </div>
        </Container>
    </div>
  )
}

export default Footer