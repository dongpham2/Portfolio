// import avt from "@/assets/avt.png";
import { useState } from "react"
import avt from "../assets/avt.jpg"
import Card from "@/components/card"
import logoMonkey from "../assets/logo-monkey.png"
import logoMap from "../assets/logo-map.png"
import logoJobcare from "../assets/logo-jobcare.png"
type Props = {}

const cardObj = [
    {
        banner: logoMonkey,
        title: "Monkey Blog",
        desc: "Website application platforms support bloggers can share their articles and find news. Moreover, it also supports bloggers to become famous and earn money from this platform.",
        languages: [
            {
                name: "Javascript"
            },
            {
                name: "PHP"
            }
        ],
        frameworks: [
            {
                name: "Vuejs"
            },
            {
                name: "Laravel"
            }
        ]
    },
    {
        banner: logoMap,
        title: "Map Travel Website",
        desc: "The website application platform helps customers learn about famous cafes, restaurants, and hotels... and also helps customers know the service quality and reviews of that store from other respondents.",
        languages: [
            {
                name: "Javascript"
            },
        ],
        frameworks: [
            {
                name: "ReactJs"
            }
        ]
    },
    {
        banner: logoJobcare,
        title: "Jobcare",
        desc: "The website application platform support users to find job that suitable for them. Furthermore, it also bring CV feature to write down their resume to send to recruiters and assist the recruiter to post their job to find candidates.",
        languages: [
            {
                name: "Javascript"
            },
        ],
        frameworks: [
            {
                name: "ReactJs"
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
                    <ion-icon name="logo-github"></ion-icon>
                    <ion-icon name="logo-linkedin"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                </div>
                <div className='relative mx-auto mt-20 mb-6 rounded-full bg-gradient-to-b from-teal-500 w-80 h-80'>
                    <img src={avt} alt="avt" className="absolute rounded-full top-3 right-4 w-72 h-72 " />
                </div>
                <div >
                    <div>Main stack:
                        <p><svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                            {...props}
                        >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-.528 2.994c.175.21.351.414.528.609.177-.195.353-.398.528-.609a24.883 24.883 0 01-1.056 0zm-1.995-.125a20.678 20.678 0 01-2.285-.368c-.075.35-.132.69-.17 1.016-.19 1.583.075 2.545.478 2.777.403.233 1.368-.019 2.645-.974.263-.197.528-.416.794-.655a20.678 20.678 0 01-1.462-1.796zm7.331-.368a20.17 20.17 0 01-2.285.368 20.678 20.678 0 01-1.462 1.796c.266.24.531.458.794.655 1.277.955 2.242 1.207 2.645.974.403-.232.667-1.194.479-2.777a11.36 11.36 0 00-.17-1.016zm1.45-.387c.577 2.639.274 4.74-1.008 5.48-1.282.74-3.253-.048-5.25-1.867-1.997 1.819-3.968 2.606-5.25 1.866-1.282-.74-1.585-2.84-1.009-5.48C3.167 14.794 1.5 13.48 1.5 12s1.667-2.793 4.241-3.614c-.576-2.639-.273-4.74 1.009-5.48 1.282-.74 3.253.048 5.25 1.867 1.997-1.819 3.968-2.606 5.25-1.866 1.282.74 1.585 2.84 1.009 5.48C20.833 9.206 22.5 10.52 22.5 12s-1.667 2.793-4.241 3.614zm-7.32-9.779a11.36 11.36 0 00-.793-.655C8.868 4.225 7.903 3.973 7.5 4.206c-.403.232-.667 1.194-.479 2.777.04.327.096.666.17 1.016a20.678 20.678 0 012.286-.368c.475-.653.965-1.254 1.462-1.796zm3.585 1.796c.802.084 1.568.209 2.285.368.075-.35.132-.69.17-1.016.19-1.583-.075-2.545-.478-2.777-.403-.233-1.368.019-2.645.974a11.36 11.36 0 00-.794.655c.497.542.987 1.143 1.462 1.796zm-1.995-.125c-.175-.21-.351-.414-.528-.609-.177.195-.353.398-.528.609a24.884 24.884 0 011.056 0zm-4.156 7.198a24.884 24.884 0 01-.528-.914c-.095.257-.183.51-.263.761.257.056.521.107.79.153zm1.932.234a22.897 22.897 0 003.392 0A22.897 22.897 0 0015.392 12a22.897 22.897 0 00-1.696-2.938 22.897 22.897 0 00-3.392 0A22.897 22.897 0 008.608 12a22.897 22.897 0 001.696 2.938zm5.852-4.728c.095-.257.183-.51.263-.761a17.974 17.974 0 00-.79-.153 24.884 24.884 0 01.527.914zM6.13 9.837c-.34.11-.662.23-.964.36C3.701 10.825 3 11.535 3 12c0 .465.7 1.175 2.166 1.803.302.13.624.25.964.36.222-.7.497-1.426.825-2.163a20.678 20.678 0 01-.825-2.163zm1.45-.388c.081.25.169.504.264.76a24.884 24.884 0 01.528-.913c-.27.046-.534.097-.791.153zm10.29 4.714c.34-.11.662-.23.964-.36C20.299 13.175 21 12.465 21 12c0-.465-.7-1.175-2.166-1.803a11.36 11.36 0 00-.964-.36c-.222.7-.497 1.426-.825 2.163.328.737.603 1.462.825 2.163zm-1.45.388a19.17 19.17 0 00-.264-.76 24.884 24.884 0 01-.528.913c.27-.046.534-.097.791-.153z" />
                        </svg></p>
                        <p><svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                            {...props}
                        >
                            <path d="M12 12.765l5.592-9.437h-3.276L12 7.33v.002L9.688 3.328h-3.28z" />
                            <path d="M18.461 3.332L12 14.235 5.539 3.332H1.992L12 20.672l10.008-17.34z" />
                        </svg></p>
                    </div>
                </div>
                <section className="flex text-center">
                    <div >
                        <h3 className="py-1 text-3xl dark:text-white">Services I offer</h3>
                        <p className="py-2 leading-8 text-gray-800 text-md dark:text-white">Since beginning my journey as a <span className="text-teal-500">Front-end Developer</span>, I have been self-learning and accumulating a substantial amount of knowledge for myself. Alongside the projects I have undertaken and continue to work on, I am confident in taking on any projects in <span className="text-teal-500">various fields</span>. Trust in me, and I will strive to deliver the best possible results.</p>
                    </div>
                </section>
                <div className="gap-10 lg:flex">
                    {cardObj.map((dataCard) => (
                        <Card data={dataCard} />
                    ))}
                </div>
                <section>
                    <div>
                        <h3 className="py-1 text-3xl dark:text-white">Portfolio</h3>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default Home