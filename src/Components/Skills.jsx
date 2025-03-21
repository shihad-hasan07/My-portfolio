import React from 'react';
import './css/skilllllll.css'
const Skills = () => {
  return (
    <div id='skills'>

      <div className="skills  bg-[url('/assets/skilbg.png')] bg-[#1e0e31] w-full bg-no-repeat bg-cover h-fit mx-auto
      py-20 px-6 sm:px-12 md:px-16 lg:px-28 ">
        <ul className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto'>

          {/* html */}
          <li className="html">
            <div className="circle">
              <svg>
                <defs>
                  <linearGradient id='gradienthtml' x1="00%" y1="100%" x2="0%" y2="0%" >
                    <stop offset='0%' stopColor='var(--high_color)' />
                    <stop offset='100%' stopColor='#b3e8ff' />
                  </linearGradient>
                </defs>
                <circle cx={70} cy={70} r={70} stroke='url(#gradienthtml)'></circle>
              </svg>
              <div className="inside">
                <span>95%</span>
                <div className="dot"></div>
              </div>
            </div>
            <h4>Html</h4>
          </li>

          {/* css */}
          <li className="css">
            <div className="circle">
              <svg>
                <defs>
                  <linearGradient id='gradientcss' x1="00%" y1="100%" x2="0%" y2="0%" >
                    <stop offset='0%' stopColor='var(--low_color)' />
                    <stop offset='100%' stopColor='#b3e8ff' />
                  </linearGradient>
                </defs>
                <circle cx={70} cy={70} r={70} stroke='url(#gradientcss)'></circle>
              </svg>
              <div className="inside">
                <span>75%</span>
                <div className="dot"></div>
              </div>
            </div>
            <h4>Css</h4>
          </li>

          {/* tailwind */}
          <li className="tailwind">
            <div className="circle">
              <svg>
                <defs>
                  <linearGradient id='gradienttailwind' x1="00%" y1="100%" x2="0%" y2="0%" >
                    <stop offset='0%' stopColor='var(--high_color)' />
                    <stop offset='100%' stopColor='#b3e8ff' />
                  </linearGradient>
                </defs>
                <circle cx={70} cy={70} r={70} stroke='url(#gradienttailwind)'></circle>
              </svg>
              <div className="inside">
                <span className=''>90%</span>
                <div className="dot"></div>
              </div>
            </div>
            <h4>Tailwind</h4>
          </li>

          {/* js */}
          <li className="js">
            <div className="circle">
              <svg>
                <defs>
                  <linearGradient id='gradientjs' x1="00%" y1="100%" x2="0%" y2="0%" >
                    <stop offset='0%' stopColor='var(--criticallow_color)' />
                    <stop offset='100%' stopColor='#b3e8ff' />
                  </linearGradient>
                </defs>
                <circle cx={70} cy={70} r={70} stroke='url(#gradientjs)'></circle>
              </svg>
              <div className="inside">
                <span>65%</span>
                <div className="dot"></div>
              </div>
            </div>
            <h4>Javascript</h4>
          </li>

          {/* react */}
          <li className="react">
            <div className="circle">
              <svg>
                <defs>
                  <linearGradient id='gradientreact' x1="00%" y1="100%" x2="0%" y2="0%" >
                    <stop offset='0%' stopColor='var(--criticallow_color)' />
                    <stop offset='100%' stopColor='#b3e8ff' />
                  </linearGradient>
                </defs>
                <circle cx={70} cy={70} r={70} stroke='url(#gradientreact)'></circle>
              </svg>
              <div className="inside">
                <span>70%</span>
                <div className="dot"></div>
              </div>
            </div>
            <h4>React</h4>
          </li>

        </ul>
      </div>

    </div>
  );
};

export default Skills;