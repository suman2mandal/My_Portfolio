import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import {AiFillLinkedin} from "react-icons/ai";
import {FaGithub, FaTwitter} from "react-icons/fa";


// import required modules
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Certificates from "./Certificates";
import Awards from "./Awards";
import '../style.css';

// import required modules
import { Pagination } from 'swiper/modules';
import EducationSlide from "./EducationSlide";
import Skills from "./Skill"
import AllProjects from "./AllProjects"

function Home(props) {

    const project = ()=>{
        const projects=[]

        for(let i=0;i<5;i++) {
            projects.push(
                <SwiperSlide>
                    <div className=" flex flex-col items-center gap-x-8 rounded-md  p-3 md:flex-row">
                        <div className="shrink-0"><a href="/demo/astro-boilerplate"><img
                            className="h-36 w-36 hover:translate-y-1" src="assets/images/project-web-design.png"
                            alt="Project Web Design" loading="lazy"/></a></div>
                        <div>
                            <div className="flex flex-col items-center gap-y-2 md:flex-row"><a
                                className="hover:text-cyan-400" href="/demo/astro-boilerplate">
                                <div className="text-xl font-semibold">Project 1</div>
                            </a>
                                <div className="ml-3 flex gap-2">
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">Astro.js
                                    </div>
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">Web
                                        design
                                    </div>
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">Tailwind.css
                                    </div>
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">TypeScript
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse
                                bibendum. Nunc non posuere consectetur, justo erat semper enim, non
                                hendrerit dui odio id enim.</p></div>
                    </div>
                </SwiperSlide>
            )
            }
            return projects
    }

    const all_project = ()=>{
        const projects=[]

        for(let i=0;i<5;i++) {
            projects.push(
                <SwiperSlide>
                    <div className=" flex flex-col items-center gap-x-8 rounded-md  p-3 md:flex-row">
                        <div className="shrink-0"><a href="/demo/astro-boilerplate"><img
                            className="h-36 w-36 hover:translate-y-1" src="assets/images/project-web-design.png"
                            alt="Project Web Design" loading="lazy"/></a></div>
                        <div>
                            <div className="flex flex-col items-center gap-y-2 md:flex-row"><a
                                className="hover:text-cyan-400" href="/demo/astro-boilerplate">
                                <div className="text-xl font-semibold">Project 1</div>
                            </a>
                                <div className="ml-3 flex gap-2">
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">Astro.js
                                    </div>
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">Web
                                        design
                                    </div>
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">Tailwind.css
                                    </div>
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">TypeScript
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse
                                bibendum. Nunc non posuere consectetur, justo erat semper enim, non
                                hendrerit dui odio id enim.</p></div>
                    </div>
                </SwiperSlide>
            )
        }
        return projects
    }

    const allSkills=()=>{
        const allSkills=[]
        // for(let i=0;i<8;i++){
        //         allSkills.push(
        //             <div className="h-44 w-32 justify-center justify-self-center bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 text-black hover:bg-white hover:shadow-xl">
        //         <svg className="h-14" viewBox="0 0 177 171">
        //             <ellipse cx="107" cy="122" rx="53.6" ry="49.2" fill="#fab529"/>
        //             <g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4.2">
        //                 <path d="m88.4 83.8c-13.3 19.7-11.3 35.6-3.21 53.6"/>
        //                 <path d="m14.8 114c6.49 15.1 14.3 28.3 31.3 28.7"/>
        //                 <path d="m121 165c38.5 8.41 56.2-30.2 54.6-52.5-1.64-22.3-14.4-57.2-55.1-46.4"/>
        //                 <path d="m120 165c-38.5 8.41-56.2-30.2-54.6-52.5 1.64-22.3 14.4-57.2 55.1-46.4"/>
        //                 <path d="m115 41.6v-9.2c0-2.47 1.99-4.46 4.46-4.46s4.46 1.99 4.46 4.46v13.4"/>
        //                 <path d="m151 31.1c-8.19 1.34-15.3-0.291-30.2 19.2v15.7c9.29 3.53 27.7-20.4 30.2-34.9z"/>
        //                 <path d="m90 29.3c15.6-0.0918 24 9.29 30.7 21v15.7c-11-8.01-23.6-7.92-30.7-36.7z"/>
        //                 <path d="m24.9 10.4c3.42-3.09 7.43-4.06 11.6-4.53"/>
        //                 <path
        //                     d="m32.3 26.2c-1.82-6.37-8.48-18-14.5-22.9-4.07-0.39-6.34 0.218-7.8 5.05 7.73 7.54 10.5 13.7 14.8 21.7"/>
        //                 <path d="m82.3 25.6c-15.1 0.422-35.4-4.06-45.8-19.7 25.7-13.6 40.8 7.28 45.8 19.7z"/>
        //                 <path d="m66.9 16.2c-9.8-7.37-19.9-11.1-30.4-10.4"/>
        //                 <path
        //                     d="m64.6 152c-26.2 20.7-65.7-16.3-63-46.1 1.33-14.5 6.37-22.5 9.58-27.5s1.06-10.1 1.65-10.2c-3.12-17.6-0.924-34.1 18-40"/>
        //                 <path
        //                     d="m64.6 152c33 4.8 48.8-47 31.5-71.4-8.39-11.9-16.8-16.3-22-19-5.24-2.65-5.95-8.19-6.54-8.03-6.11-16.8-17.4-29.7-36.7-25.4"/>
        //             </g>
        //         </svg>
        //         <span className="mt-6 text-sm ?leading-5 font-semibold text-center">Frozen<br/>Seafoods</span>
        //     </div>)
        // }
        for(let i=0;i<5;i++) {
            allSkills.push(
                <SwiperSlide>
                    <div className=" flex flex-col items-center gap-x-8 rounded-md  p-3 md:flex-row">
                        <div className="shrink-0"><a href="/demo/astro-boilerplate"><img
                            className="h-36 w-36 hover:translate-y-1" src="assets/images/project-web-design.png"
                            alt="Project Web Design" loading="lazy"/></a></div>
                        <div>
                            <div className="flex flex-col items-center gap-y-2 md:flex-row"><a
                                className="hover:text-cyan-400" href="/demo/astro-boilerplate">
                                <div className="text-xl font-semibold">Project 1</div>
                            </a>
                                <div className="ml-3 flex gap-2">
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">Astro.js
                                    </div>
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">Web
                                        design
                                    </div>
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">Tailwind.css
                                    </div>
                                    <div
                                        className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">TypeScript
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse
                                bibendum. Nunc non posuere consectetur, justo erat semper enim, non
                                hendrerit dui odio id enim.</p></div>
                    </div>
                </SwiperSlide>
            )
        }
        return allSkills
    }

    const certificate=()=>{
        const certificates=[]

        for(let i=0;i<5;i++){
            certificates.push(<a className="hover:translate-y-1" href="/demo/astro-boilerplate/posts/forth-post">
                <div className="overflow-hidden rounded-md bg-slate-800">
                    <div className="aspect-w-3 aspect-h-2"><img
                        className="h-full w-full object-cover object-center"
                        src="/demo/astro-boilerplate/assets/images/image-post3.jpeg" alt="Image post 3"
                        loading="lazy"/></div>
                    <div className="px-3 pt-4 pb-6 text-center"><h2 className="text-xl font-semibold">4th Lorem
                        ipsum dolor sit</h2>
                        <div className="mt-1 text-xs text-gray-400">Feb 4, 2020</div>
                        <div className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Tenetur vero esse non molestias eos excepturi.
                        </div>
                    </div>
                </div>
            </a>)
        }
        return certificates
    }

    const awards=()=>{
        const awards=[]
        for(let i=0;i<2;i++){
            awards.push(<div>
                <div className="mb-2 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white ">
                    <div className="w-full md:w-1/3 bg-white grid place-items-center">
                        <img
                            src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="tailwind logo" className="rounded-xl"/>
                    </div>
                    <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                        <div className="flex justify-between item-center">
                            <p className="text-gray-500 font-medium hidden md:block">Vacations</p>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500"
                                     viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <p className="text-gray-600 font-bold text-sm ml-1">
                                    4.96
                                    <span className="text-gray-500 font-normal">(76 reviews)</span>
                                </p>
                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500"
                                     viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div
                                className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                                Superhost
                            </div>
                        </div>
                        <h3 className="font-black text-gray-800 md:text-3xl text-xl">The Majestic and Wonderful
                            Bahamas</h3>
                        <p className="md:text-lg text-gray-500 text-base">The best kept secret of The Bahamas is the
                            country’s sheer
                            size and diversity. With 16 major islands, The Bahamas is an unmatched destination</p>
                        <p className="text-xl font-black text-gray-800">
                            $110
                            <span className="font-normal text-gray-600 text-base">/night</span>
                        </p>
                    </div>
                </div>
            </div>)
        }
        return awards
    }
    return (
        <>
            <Swiper
                direction={'vertical'}

                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper "
            >
                <SwiperSlide>
                    <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
                        <div>
                            <h1 className="text-3xl text-white font-bold">Hi there, I'm <span
                                className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">Suman Mandal</span> 👋
                            </h1><p className="mt-6 text-xl leading-9">

                        </p>
                            <div className="mt-3 flex gap-1">
                                <a href="/demo/astro-boilerplate">
                                    <AiFillLinkedin className={"social_icon"}/>
                                </a>
                                <a href="/demo/astro-boilerplate">
                                    <FaGithub className={"social_icon"}/>
                                </a>
                                <a href="/demo/astro-boilerplate">
                                    <BsFacebook className={"social_icon"}/>
                                </a>
                                <a href="/demo/astro-boilerplate">
                                    {/*<AiFillTwitterCircle style={{fontSize:"38px"}} className={"social_icon"}/>*/}
                                    <FaTwitter className={"social_icon"}/>
                                </a>
                            </div>
                        </div>
                        <div className="shrink-0">
                            <img className="h-80 w-64" style={{borderRadius:"50%",height:"100%",width:"100%"}} src="https://avatars.githubusercontent.com/u/36975298?s=400&u=04b9b004887c2b8c833281df3284ad7874e28eea&v=4"
                                 alt="Avatar image" loading="lazy"/>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="mx-auto text-white max-w-screen-lg px-3 py-10 ">
                        <div className="mx-auto max-w-screen-lg px-3 py-6">
                            <div className="mb-6 text-2xl font-bold">Educational <span
                                className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">Qualification</span>
                            </div>
                            {/*<div className="flex flex-col gap-6">*/}
                            {/*    /!*<Education/>*!/*/}
                            {/*    {project()}*/}
                            {/*</div>*/}
                            <EducationSlide project={project()}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mx-auto max-w-screen-lg px-3 py-6">
                        <div className="mb-6 text-2xl font-bold">Technical <span
                            className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">Skills</span>
                        </div>
                        {/*<div className="grid grid-cols-1 justify-center gap-6 md:grid-cols-5">*/}
                            <Skills allSkills={allSkills()}/>
                        {/*</div>*/}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mx-auto max-w-screen-lg px-3 py-6">
                        <div className="mb-6 text-2xl font-bold">Recent <span
                            className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">Projects</span>
                        </div>
                        {/*<div className="flex flex-col gap-6">*/}
                            <AllProjects all_project={all_project()}/>
                        {/*</div>*/}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mx-auto max-w-screen-lg px-3 py-6">
                        <div className="mb-6 text-2xl font-bold"> <span
                            className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">Certificates</span>
                        </div>
                        {/*<div className="mx-auto max-w-screen-lg px-3 ">*/}
                        {/*    /!*<div className="grid grid-cols-1 gap-6 md:grid-cols-3">*!/*/}
                        {/*    /!*    /!*{certificate()}*!/*!/*/}
                        {/*    /!*    *!/*/}
                        {/*    /!*</div>*!/*/}
                        {/*    */}
                        {/*</div>*/}
                        <Certificates/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mx-auto max-w-screen-lg px-3 py-6">
                        <div className="mb-6 text-2xl font-bold"> <span
                            className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">Awards</span>
                        </div>
                        {/*    <div className="gap-6">*/}
                        {/*        {awards()}*/}
                        {/*    </div>*/}

                        <Awards/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-slate-900 text-gray-100 rounded-3xl">
                        <div className="mx-auto  max-w-screen-lg px-3 py-6 ">
                            <div className="mx-auto max-w-screen-lg px-3 py-6">
                                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                                    <div className="sm:w-7/12">
                                        <div className="text-3xl font-bold">Connect with <span
                                            className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">Me</span>
                                        </div>
                                        <p className="mt-3 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Tenetur vero
                                            esse non molestias eos excepturi, inventore atque cupiditate.</p></div>
                                    <div className="w-full sm:w-5/12">
                                        <form className="flex rounded-full bg-slate-800 px-4 py-2 focus-within:ring-2 focus-within:ring-cyan-600 hover:ring-2 hover:ring-cyan-600">
                                            <input className="w-full appearance-none bg-slate-800 focus:outline-none"/>
                                            <button className="ml-2
                                shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-1 text-sm
                                font-medium hover:from-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2
                                focus:ring-cyan-600/50" type="submit">
                                                Subscribe
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="mx-auto max-w-screen-lg px-3 py-6">
                                <div className="border-t border-gray-600 pt-5">
                                    <div className="text-sm text-gray-200">Copyright @Suman Mandal

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </>
    );
}

export default Home;