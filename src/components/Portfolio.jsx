import React from 'react'
import p1 from "../assets/portfolio/p1.png"
import p2 from "../assets/portfolio/p2.png"
import p3 from "../assets/portfolio/p3.png"
import p4 from "../assets/portfolio/p4.png"


const Portfolio = () => {

    // const portfolios = [
    //     {
    //         id:1,
    //         src: p1
    //     },
    //     {
    //         id:2,
    //         src: p2
    //     },
    //     {
    //         id:3,
    //         src: p3
    //     },
    //     {
    //         id:4,
    //         src: p4
    //     },
    // ]
    



    return (
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            
              <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={p1}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">  
                    <a href="https://shubh-porwal.github.io/Website---Shop-Project/">
                    Demo
                    </a>
                
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href="https://github.com/SHUBH-PORWAL/Website---Shop-Project">
                      Code
                    </a>
                    
                  </button>
                </div>
              </div>
              <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
                  src={p2}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">  
                    <a href="https://chat-app-shubhporwal.netlify.app/">
                    Demo
                    </a>
                
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href="https://github.com/SHUBH-PORWAL/Chat-App">
                      Code
                    </a>
                    
                  </button>
                </div>
                </div>

                <div className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={p3}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">  
                    <a href="https://porwalstore.netlify.app/">
                    Demo
                    </a>
                
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href="https://github.com/SHUBH-PORWAL/Porwal-Store-Ecommerce">
                      Code
                    </a>
                    
                  </button>
                </div>
                </div> 
              
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
            src={p4}
            alt=""
            className="rounded-md duration-200 hover:scale-105"
          />
          <div className="flex items-center justify-center">
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">  
              <a href="https://6494774125564150c7164ef6--benevolent-brioche-249f6e.netlify.app/">
              Demo
              </a>
          
            </button>
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
              <a href="https://github.com/SHUBH-PORWAL/The-Fit-Club.git">
                Code
              </a>
              
            </button>
            </div> 
        </div>
    </div>
    
  </div>
</div>
      
    );
  };
  
  export default Portfolio;