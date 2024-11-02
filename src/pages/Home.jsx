import React from "react";
import Cover from "../components/Cover";
import { useState } from 'react';
import SkillCard from "../components/SkillCard";
import Scroller from "../components/Scroller";
import MyProjects from "../components/ShortProjects";

function Home() {

    const [isCoverVisible, setIsCoverVisible] = useState(true); //visibility
  
    const handleCoverDismiss = () => {
    setIsCoverVisible(false); // Hide the cover,  overflow-y-scroll
    };

    return (
        <div>
            {isCoverVisible && <Cover onDismiss={handleCoverDismiss} />} 

            <div className="text-center text-6xl font-normal pt-8 hover:animate-shake">
                Hi. I'm Maria
            </div>

            <div className='text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl pt-24 py-24'>
                I'm a <span className='font-bold hover:text-customGreen'>full stack developer</span>
            </div>


            <hr></hr>

            {/*I do*/}
            <div className=' text-5xl pt-12 pl-5'>
                <div className="hover:text-customGreen">// I DO</div>
                <div className='flex justify-center pt-10 pb-10'>
                <SkillCard/>
                </div>
            </div>

            <hr></hr>

            {/*My tech stack*/}
            <div className='py-7'>
                <div className="text-5xl pt-12 pr-3 text-right hover:text-customGreen">// MY TECH STACK</div>
                <Scroller/>
            </div>

            <hr></hr>

            {/*Projects*/}
            <div className=' text-5xl pt-12 pl-5'>
            <div className="hover:text-customGreen">// PROJECTS</div>
            <div className='flex justify-center pt-10 pb-10'>
                {/*TO DO SHORT LIST HERE*/}
                <MyProjects/>
            </div>
            </div>

            
        
            {/*SHAKE MY NAME ONCE, CHECK TO POP CARDS AFTER SCROLLING SPE AREA*/}


        </div>
    )
}

export default Home