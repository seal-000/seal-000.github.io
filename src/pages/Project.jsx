import React from 'react';
import ScrollTop from '../components/ScrollTop';


const Projects = () => {
  return (
    
    <main className="flex flex-col w-full gap-8 px-4 mt-12 max-w-9xl mb-28">
        <ScrollTop/>

        <div className="flex-grow p-4 border rounded-lg border-bline bg-white">
            <div className="flex flex-col lg:flex-row items-start justify-center lg:gap-8 gap-3">

            <img
                alt="DND Game"
                loading="lazy"
                width="500"
                height="500"
                className="object-cover w-full my-1 rounded-md"
                src="/projectIcons/dnd.gif"
            />
            <div className="w-full">
                <div className="flex items-center justify-between w-full">
                <div>
                    <h1 className="text-xl font-semibold lg:text-4xl md:text-3xl"> DND Character Creator</h1>
                    <h1 className="text-sm font-light">React, Firebase, Material-UI</h1>
                </div>
                <div className="text-sm font-light">{/*here if date*/}</div>
                </div>
                <div className="mt-4">
                <div className='text-xl mt-2'>• Developed a web app for creating and managing custom D&D characters with real-time updates using Next.js and Firebase </div>
                <div className='text-xl mt-2'>• Enabled user authentication, profile creation, and password reset functionality through Firebase Authentication</div>
                <div className='text-xl mt-2'>• Integrated Firebase Storage to allow users to upload and update profile images seamlessly</div>
                <div className='text-xl mt-2 pb-4'>• Designed a responsive, user-friendly interface using Material-UI, optimized for both desktop and mobile views</div>
                {/*Open on New Window*/}
                <a target="_blank" href="https://dnd-game-blush.vercel.app/sign-up" className="flex items-center justify-center w-full py-2 mt-3 transition-all border rounded-full bg-customGreen">Visit</a>
                </div>
            </div>
            </div>

        </div>

        <div className="flex-grow p-4 border rounded-lg bg-white">
            <div className="flex flex-col items-start justify-center lg:gap-8 gap-3 lg:flex-row-reverse">
            <img
                alt="works"
                loading="lazy"
                width="400"
                height="500"
                className="object-cover w-full my-1 rounded-md"
                src="/projectIcons/dogAPI.png"
            />
            <div className="w-full">
                <div className="flex items-center justify-between w-full">
                <div>
                    <h1 className="text-xl font-semibold lg:text-4xl md:text-3xl ">Dogs Around the World</h1>
                    <h1 className="text-sm font-light">React, Dog API</h1>
                </div>
                <h1 className="text-sm font-light">{/*here if date*/}</h1>
                </div>
                <div className="mt-4">
                    <div className='text-xl mt-2'>• A web application with React that lets users explore over 300 dog breeds, complete with tailored recommendations </div>
                    <div className='text-xl mt-2'>• Allowing users to save various dog breeds and present 4+ temperaments</div>
                    <div className='text-xl mt-2'>• Including unique features like randomized API calls and attribute-based filtering</div>
                <a target="_blank" href="https://main.dhud9t5nprcb1.amplifyapp.com/" className="flex items-center justify-center w-full py-2 mt-3 transition-all border rounded-full bg-customGreen">Visit</a>
                </div>
            </div>
            </div>
        </div>

        <div className="flex-grow p-4 border rounded-lg border-bline bg-slate-50">
            <div className="flex flex-col lg:flex-row items-start justify-center lg:gap-8 gap-3">
            <img
                alt="works"
                loading="lazy"
                width="200"
                height="200"
                className="object-cover w-full my-1 rounded-md"
                src="/projectIcons/shar.png"
            />
            <div className="w-full">
                <div className="flex items-center justify-between w-full">
                    <div>
                        <h1 className="text-xl font-semibold lg:text-4xl md:text-3xl">Sharall, A Multi-List Web App Django</h1>
                        <h1 className="text-sm font-light">Django, Python, PostgreSQL</h1>
                    </div>
                    <h1 className="text-sm font-light">{/*here if date*/}</h1>
                </div>
                <div className="mt-4">
                <div className='text-xl mt-2'>• Built a responsive web app with Django, featuring integrated to-do, wish, and cook lists that allow users to prioritize tasks and manage recipes effectively </div>
                    <div className='text-xl mt-2'>• Created a Python-based text input feature that saves tasks to a PostgreSQL database</div>
                    <div className='text-xl mt-2 pb-4'>• Added an intuitive delete button beside each task to streamline task management and simplify removal</div>
                    <a target="_blank" href="https://web-production-6a7d.up.railway.app/" className="flex items-center justify-center w-full py-2 mt-3 transition-all border rounded-full bg-customGreen">Visit</a>
                </div>
            </div>
            </div>
        </div>
    </main>

  );
};

export default Projects;
