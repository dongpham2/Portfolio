// import avt from "@/assets/avt.png";
import { useState } from "react"
import avt from "../assets/avt.jpg"
import waocon from "../assets/waocon.jpg"
import fiver from "../assets/fiver.png"
import Card from "@/components/card"
import logoMonkey from "../assets/logo-monkey.png"
import logoMap from "../assets/logo-map.png"
import logoJobcare from "../assets/logo-jobcare.png"
import { BiLogoReact } from "react-icons/bi";
import { BiLogoVuejs } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { FaShopify } from "react-icons/fa";
import { BiLogoSass } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import { Link } from "react-router-dom"
import ButtonScrollToTop from "@/components/ButtonScrollToTop"
type Props = {}

const cardObj = [

    {
        time: "12/2022: Capstone - 1",
        banner: logoJobcare,
        title: "Jobcare",
        desc: "The website application platform support users to find job that suitable for them. Furthermore, it also bring CV feature to write down their resume to send to recruiters and assist the recruiter to post their job to find candidates.",
        languages: [
            {
                name: "Javascript"
            },
            {
                name: "ReactJs"
            },
            {
                name: "Nodejs"
            },
            {
                name: "MySql"
            },
        ]
    },
    {
        time: "05/2023: Capstone - 2",
        banner: logoMap,
        title: "Map Travel Website",
        desc: "The website application platform helps customers learn about famous cafes, restaurants, and hotels... and also helps customers know the service quality and reviews of that store from other respondents.",
        languages: [
            {
                name: "Javascript"
            },
            {
                name: "ReactJs"
            },
            {
                name: "Nodejs"
            },
            {
                name: "MongoDB"
            }
        ]
    }, {
        time: "08/2023: Intern Waocon&SG",
        banner: logoMonkey,
        title: "Monkey Blog",
        desc: "Website application platforms support bloggers can share their articles and find news. Moreover, it also supports bloggers to become famous and earn money from this platform.",
        languages: [
            {
                name: "Javascript"
            },
            {
                name: "PHP"
            },
            {
                name: "Vuejs"
            },
            {
                name: "Laravel"
            },
            {
                name: "MySql"
            }
        ]
    },

];

const Home = (props: Props) => {
    const [darkMode, setDarkMode] = useState(true)
    return (
        <div className={darkMode ? "dark dark:bg-gray-900 " : "white white:text-black"}>
            <div className='min-h-screen px-10 md:px-20 lg:px-40 ' >
                <nav className='flex justify-between py-10 mb-12'>
                    <h1 className='text-xl font-cursive dark:text-white'>Developer</h1>
                    <ul className='flex items-center'>
                        <li className='text-2xl text-white cursor-pointer' onClick={() => setDarkMode(!darkMode)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                        </li>
                        <li>
                            <a href="#" className='px-4 py-2 ml-8 text-white rounded-md bg-gradient-to-r from-cyan-500 to-teal-500'>Resume</a>
                        </li>
                    </ul>
                </nav>
                <div className='p-10 text-center'>
                    <h2 className='py-2 text-5xl font-medium text-teal-600 md:text-6xl'>Pham Van Dong</h2>
                    <h3 className='py-2 text-2xl dark:text-white'>Web Developer</h3>
                    <p className='max-w-3xl py-5 mx-auto leading-8 text-gray-800 text-md md:text-3xl dark:text-white'>Frontend Developer providing services for programing needs. Join me down below and let's get cracking ! </p>
                </div>
                <div className='flex justify-center gap-16 text-5xl text-gray-600 dark:text-white'>
                    <Link to="https://github.com/dongpham2" target="_blank">
                        <ion-icon name="logo-github"></ion-icon>
                    </Link>
                    <Link to="https://www.linkedin.com/in/van-dong-ba2b36251/" target="_blank">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </Link>
                    <Link to="https://www.facebook.com/pham.dong.71619" target="_blank">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </Link>

                </div>
                <div className='relative mx-auto mt-20 mb-6 rounded-full bg-gradient-to-b from-teal-500 w-80 h-80'>
                    <img src={avt} alt="avt" className="absolute rounded-full top-3 right-4 w-72 h-72 " />
                </div>
                <div className="flex items-center justify-center gap-5 mb-10">
                    <p className="text-blue-500">
                        <BiLogoReact size="4rem" />
                    </p>
                    <p className="text-green-700">
                        <BiLogoVuejs size="4rem" />
                    </p>
                    <p className="text-blue-600">
                        <BiLogoTypescript size="4rem" />
                    </p>
                    <p className="text-green-400">
                        <FaShopify size="4rem" />
                    </p>
                    <p className="text-pink-400">
                        <BiLogoSass size="4rem" />
                    </p>
                    <p className="text-blue-500">
                        <BiLogoTailwindCss size="4rem" />
                    </p>
                    <p className="text-violet-600">
                        <BsFillBootstrapFill size="3.5rem" />
                    </p>
                </div>
                <section className="flex text-center">
                    <div >
                        <h3 className="py-1 text-3xl dark:text-white">Services I offer</h3>
                        <p className="py-2 leading-8 text-gray-800 text-md dark:text-white">Since beginning my journey as a <span className="text-teal-500">Front-end Developer</span>, I have been self-learning and accumulating a substantial amount of knowledge for myself. Alongside the projects I have undertaken and continue to work on, I am confident in taking on any projects in <span className="text-teal-500">various fields</span>. Trust in me, and I will strive to deliver the best possible results.</p>
                    </div>
                </section>
                <div>
                    <h3 className="py-1 text-3xl dark:text-white">My projects</h3>
                </div>
                <div className="gap-10 lg:grid lg:grid-cols-3">
                    {cardObj.map((dataCard, index) => (
                        <Card data={dataCard} key={index} />
                    ))}
                </div>
                <section>
                    <div>
                        <h3 className="py-1 mb-4 text-3xl dark:text-white">Experience</h3>
                        <div className="relative w-1 m-auto h-[900px] bg-slate-200 mb-14">
                            <div>
                                <div className="w-[200px] text-center gap-1 flex absolute w-16 h-16 rounded-full top-3 left-[-30px]">
                                    <img src={waocon} alt="waocon" className="object-cover rounded-full" />
                                    <div className="text-white">08/2023 - Present</div>
                                </div>
                                <div className="absolute text-white top-0 left-[-400px] w-[350px] bg-gray-800 p-2 shadow-lg rounded-lg">
                                    <h2 className="mt-2 text-xl font-extrabold ">Frontend Developer</h2>
                                    <span className="inline-block my-1 text-lime-100">Waocon & SG</span>
                                    <p> <span className="ml-2 mr-3 inline-block w-2 h-2 bg-white rounded-full mb-[2px]"></span> Developing and maintaining web applications using Reactjs, Vuejs and other related technologies</p>
                                    <p> <span className="ml-2 mr-3 inline-block w-2 h-2 bg-white rounded-full mb-[2px]"></span> Collaborating with cross-functional teams including designers, product managers, and other developers to create hight-quality products</p>
                                    <p> <span className="ml-2 mr-3 inline-block w-2 h-2 bg-white rounded-full mb-[2px]"></span>Implementing responsive design and ensuring cross-browser compatibility</p>
                                </div>
                            </div>
                            <div>
                                <div className="w-[200px] text-center gap-1 flex absolute w-16 h-16 rounded-full top-96 left-[-165px]">
                                    <div className="text-white">08/2023 - Present</div>
                                    <img src={fiver} alt="waocon" className="object-cover rounded-full" />
                                </div>
                                <div className="absolute text-white top-[500px] left-[60px] w-[350px] bg-gray-800 p-2 shadow-lg rounded-lg">
                                    <h2 className="mt-2 text-xl font-extrabold ">Fiver</h2>
                                    <span className="inline-block my-1 text-lime-100">Freelancer</span>
                                    <p> <span className="ml-2 mr-3 inline-block w-2 h-2 bg-white rounded-full mb-[2px]"></span> Developing and maintaining web applications using Reactjs and other related technologies</p>
                                    <p> <span className="ml-2 mr-3 inline-block w-2 h-2 bg-white rounded-full mb-[2px]"></span> Collaborating with PO to solve problems.</p>
                                    <p> <span className="ml-2 mr-3 inline-block w-2 h-2 bg-white rounded-full mb-[2px]"></span>Implementing responsive design and ensuring cross-browser compatibility</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <ButtonScrollToTop />
        </div>

    )
}

export default Home