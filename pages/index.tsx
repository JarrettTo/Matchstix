import type { NextPage } from 'next';
import VectorBG from '../public/hero/bg_vector.svg'
import Image from 'next/image';

const Home: NextPage = () => {
  const heroMainBg = require('/public/hero/hero_main_bg.jpg').default.src;
  const heroLeftBg = require('/public/hero/hero_left_bot_bg.jpg').default.src;
  const heroBotBg = require('/public/hero/hero_mid_bot_bg.jpg').default.src;
  const heroTopRightBg = require('/public/hero/hero_top_right.jpg').default.src;
  return (
    <>
      <div className="flex flex-col items-center justify-center" style={{width: '100vw', height: '100vh', overflow: 'hidden', position:'relative'}}>
        <video id="background-video" muted loop autoPlay style={{ width: '100%', height: '100%', objectFit: 'cover',fontWeight: 'bold',  position:'absolute', top: 0, left: 0 }}>
          <source src="/hero/bg_video.mp4" type="video/mp4" />
        </video>
        
        <div className='flex flex-col relative w-full h-full justify-center items-center' style={{width:'100%', height:'60%'}}>
        
          <div className='flex flex-row justify-center w-8/10' style={{ textAlign: 'center', color: 'white',  position:'relative', height:'60%' }}>
            <Image src={VectorBG} className="px-12" alt="vector" width={40} height={10} style={{ width: '70%', objectFit: 'cover', fontWeight: 'bold', zIndex: 150, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />            
            <svg width="100%" viewBox="0 0 1000 500" style={{zIndex: 250}} xmlns="http://www.w3.org/2000/svg">
              <text x="50%" y="39%" dominantBaseline="middle" textAnchor="middle" style={{ fontFamily: 'Ibarra Real Nova, serif', fontSize: '200px', letterSpacing: '-10px',  fill: '#FFF1D6', stroke: '#FFF1D6', strokeWidth: '12px' }}>
                Touch Some Grass
              </text>
              <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" style={{ fontFamily: 'Ibarra Real Nova, serif', fontSize: '200px', letterSpacing: '-10px', fill: '#FFF1D6', stroke: '#FFF1D6', strokeWidth: '12px'}}>
                with Matchstix.
              </text>
            </svg>
          </div>
          <div className='flex flex-row w-7/10 justify-between'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg height="80" viewBox="0 0 200 80" style={{ cursor: 'pointer' }}>
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" style={{ fontFamily: 'Ibarra Real Nova, serif', fontSize: '45px', letterSpacing: '-2px', fill: '#FFF1D6', stroke: '#FFF1D6', strokeWidth: '2px' }}>
                about us
              </text>
            </svg>
            <span style={{ margin: '0 30px', color: '#FFF1D6', fontSize: '45px' }}>|</span>
            <svg height="80" viewBox="0 0 200 80" style={{ cursor: 'pointer' }}>
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" style={{ fontFamily: 'Ibarra Real Nova, serif', fontSize: '45px', letterSpacing: '-2px', fill: '#FFF1D6', stroke: '#FFF1D6', strokeWidth: '2px' }}>
                join us
              </text>
            </svg>
            <span style={{ margin: '0 30px', color: '#FFF1D6', fontSize: '45px' }}>|</span>
            <svg height="80" viewBox="0 0 200 80" style={{ cursor: 'pointer' }}>
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" style={{ fontFamily: 'Ibarra Real Nova, serif', fontSize: '45px', letterSpacing: '-2px', fill: '#FFF1D6', stroke: '#FFF1D6', strokeWidth: '2px' }}>
                organize
              </text>
            </svg>
          </div>
          </div>
        </div>
        <div className='flex flex-col relative justify-center items-center' style={{width:'100%', marginTop:'100px'}}>
          <div className='flex flex-row w-10/10 justify-between'>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent:'between', width:'100%', height:'30px' }}>
              {/* Instagram Button */}
              <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginRight:'60px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="#FFF1D6">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#FFF1D6"/>
                  <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#FFF1D6"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#FFF1D6"/>
                </svg>
                <svg height="80" viewBox="0 0 100 80" style={{ cursor: 'pointer' }}>
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" style={{ fontFamily: 'Ibarra Real Nova, serif', fontSize: '25px', letterSpacing: '-1px', fill: '#FFF1D6', stroke: '#FFF1D6', strokeWidth: '1px' }}>
                    <tspan>
                      <svg width="25" height="25" viewBox="0 0 24 24" fill="#FFF1D6" style={{ marginRight: '5px', verticalAlign: 'middle' }}>
                        <path d="M23.953 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.721 0-4.924 2.204-4.924 4.924 0 .39.045.765.127 1.125-4.092-.205-7.719-2.165-10.148-5.144-.422.724-.664 1.561-.664 2.455 0 1.69.861 3.179 2.169 4.055-.8-.026-1.554-.244-2.211-.609v.061c0 2.362 1.674 4.332 3.897 4.778-.408.111-.837.171-1.279.171-.313 0-.615-.03-.911-.086.615 1.926 2.396 3.33 4.504 3.37-1.65 1.293-3.73 2.065-5.995 2.065-.39 0-.779-.023-1.17-.068 2.136 1.37 4.67 2.172 7.406 2.172 8.88 0 13.741-7.35 13.741-13.742 0-.21 0-.42-.016-.63.942-.682 1.766-1.534 2.414-2.507z" />
                      </svg>
                      matchstix
                    </tspan>
                  </text>
                </svg>
              </div>
              
              
              {/* Twitter Button */}
              <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginRight:'60px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 -2 20 20" version="1.1">
      
                    <title>twitter [#154]</title>
                    <desc>Created with Sketch.</desc>
                    <defs>
                </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="#FFF1D6">
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#154]">
                </path>
                            </g>
                        </g>
                    </g>
                </svg>
                  <svg height="80" viewBox="0 0 100 80" style={{ cursor: 'pointer' }}>
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" style={{ fontFamily: 'Ibarra Real Nova, serif', fontSize: '25px', letterSpacing: '-1px', fill: '#FFF1D6', stroke: '#FFF1D6', strokeWidth: '1px' }}>
                      <tspan>
                        <svg width="25" height="25" viewBox="0 0 24 24" fill="#FFF1D6" style={{ marginRight: '5px', verticalAlign: 'middle' }}>
                          <path d="M23.953 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.721 0-4.924 2.204-4.924 4.924 0 .39.045.765.127 1.125-4.092-.205-7.719-2.165-10.148-5.144-.422.724-.664 1.561-.664 2.455 0 1.69.861 3.179 2.169 4.055-.8-.026-1.554-.244-2.211-.609v.061c0 2.362 1.674 4.332 3.897 4.778-.408.111-.837.171-1.279.171-.313 0-.615-.03-.911-.086.615 1.926 2.396 3.33 4.504 3.37-1.65 1.293-3.73 2.065-5.995 2.065-.39 0-.779-.023-1.17-.068 2.136 1.37 4.67 2.172 7.406 2.172 8.88 0 13.741-7.35 13.741-13.742 0-.21 0-.42-.016-.63.942-.682 1.766-1.534 2.414-2.507z" />
                        </svg>
                        matchstix
                      </tspan>
                    </text>
                  </svg>
              </div>
              
              {/* TikTok Button */}
              <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF1D6" width="25px" height="25px" viewBox="0 0 32 32" version="1.1">
                <title>tiktok</title>
                <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"/>
                </svg>
                <svg height="80" viewBox="0 0 100 80" style={{ cursor: 'pointer' }}>
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" style={{ fontFamily: 'Ibarra Real Nova, serif', fontSize: '25px', letterSpacing: '-1px', fill: '#FFF1D6', stroke: '#FFF1D6', strokeWidth: '1px' }}>
                    <tspan>
                      <svg width="25" height="25" viewBox="0 0 24 24" fill="#FFF1D6" style={{ marginRight: '5px', verticalAlign: 'middle' }}>
                        <path d="M23.953 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.721 0-4.924 2.204-4.924 4.924 0 .39.045.765.127 1.125-4.092-.205-7.719-2.165-10.148-5.144-.422.724-.664 1.561-.664 2.455 0 1.69.861 3.179 2.169 4.055-.8-.026-1.554-.244-2.211-.609v.061c0 2.362 1.674 4.332 3.897 4.778-.408.111-.837.171-1.279.171-.313 0-.615-.03-.911-.086.615 1.926 2.396 3.33 4.504 3.37-1.65 1.293-3.73 2.065-5.995 2.065-.39 0-.779-.023-1.17-.068 2.136 1.37 4.67 2.172 7.406 2.172 8.88 0 13.741-7.35 13.741-13.742 0-.21 0-.42-.016-.63.942-.682 1.766-1.534 2.414-2.507z" />
                      </svg>
                      matchstix
                    </tspan>
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div style={{ marginTop:'15px',height:'30px'}}>
            <svg height="100%" width="100%"  viewBox="0 0 2500 80" style={{ cursor: 'pointer' }}>
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" style={{ fontFamily: 'Ibarra Real Nova, serif', fontSize: '50px',letterSpacing: '-1px', fill: '#FFF1D6', stroke: '#FFF1D6', strokeWidth: '1px' }}>
                © 2024 Matchstix. All rights reserved. Unauthorized use or reproduction is strictly prohibited. Fugg it we ball, typeshi.
              </text>
            </svg>
          </div>
          
        </div>
      </div>
      <div className="text-white min-h-screen p-14 grid grid-cols-4 grid-rows-10 gap-6">
     
      <div className="bg-gray-800 rounded-3xl col-span-1 row-span-6" style={{ height: '500px', overflow: 'hidden', position:'relative'}}>
        <video id="background-video" muted loop autoPlay style={{ width: '100%', height: '100%', objectFit: 'cover', top: 0, left: 0 }}>
          <source src="/hero/hero_left_bg.mp4" type="video/mp4" />
        </video>
        <div className='gradient-overlay' style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(14,14,14,0) 0%, rgba(14,14,14,1) 100%)', zIndex: 99 }}></div>
        <div className='flex flex-row justify-center' style={{ position: 'absolute', bottom: '40px', textAlign: 'center', color: 'white', zIndex: 100 }}>
          <p style={{ fontFamily: 'Inter, sans-serif', width:'70%',fontSize: '20px', lineHeight:'110%'}}>Make your next memory with the right people using our AI algorithm</p>
        </div>
      </div>
        
      {/* Middle-right register form */}
      <div className=" rounded-3xl col-span-2 row-span-6">
        <div style={{height:'15%', width:'100%'}}>
          <p className="h-2/10">Join Marcus, Betty, James, and 500+ users and start meeting new matches!</p>
        </div>
        
        <div className="flex flex-col justify-center items-center p-4 rounded-3xl h-8/10" style={{ backgroundImage: `url(${heroMainBg})`, backgroundSize: 'cover', backgroundPosition: 'center', height:'85%'}}>
          
          <h2 className="font-sans font-bold text-64 leading-tightest tracking-tightest w-10/12 text-center mb-4">Touch some grass with Matchstix.</h2>
          <div className="relative mt-4 bg-white rounded overflow-hidden rounded-3xl shadow w-10/12">
            <input type="email" placeholder="Enter Your Email" className="p-4 pl-4 pr-20 w-full text-gray-700 rounded-3xl" />
            <button className="absolute inset-y-1 right-2 bg-orange hover:bg-orange-600 rounded-3xl text-white font-semibold py-2 px-6  h-7/10">
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-1 row-span-10 grid grid-cols-1 grid-rows-10 gap-8" style={{position:'relative'}}>
        
        <div className="bg-gray-800 p-4 rounded-3xl col-span-1 row-span-4" style={{ position:'relative',backgroundImage: `url(${heroTopRightBg})`, backgroundSize: 'cover', backgroundPosition: 'center',zIndex: 2 }}>
          <div className='gradient-overlay rounded-3xl' style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(14,14,14,0) 0%, rgba(14,14,14,1) 100%)', zIndex: 3 }}></div>
          <div className='flex flex-col items-center justify-start' style={{ position: 'absolute', bottom: '40px',color: 'white', zIndex: 100 }}>
            <p className="font-bold leading-tightest tracking-tightest mb-2" style={{ fontFamily: 'Inter, sans-serif', width:'90%',fontSize: '21px', lineHeight:'110%'}}>Be an Event Organizer</p>
            <p style={{ fontFamily: 'Inter, sans-serif', width:'90%',fontSize: '16px', lineHeight:'110%'}}>Make your next memory with the right people using our AI algorithm</p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-3xl col-span-1 row-span-6" style={{ height: '500px', overflow: 'hidden', position:'relative', zIndex: 2}}>
        <div className='gradient-overlay' style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(14,14,14,0.3) 0%, rgba(14,14,14,0.3) 100%)', zIndex: 1 }}></div>
          <video id="background-video" muted loop autoPlay style={{ width: '100%', height: '100%', objectFit: 'cover', top: 0, left: 0 }}>
            <source src="/hero/hero_right_bot.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Bottom-left event info */}
      <div className="p-10 rounded-3xl col-span-2 row-span-4 flex flex-col" style={{ backgroundImage: `url(${heroLeftBg})`, backgroundSize: 'cover', backgroundPosition: 'center', position:'relative' }}>
        <div className='gradient-overlay' style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(14,14,14,0.3) 0%, rgba(14,14,14,0.75) 100%)', zIndex: 1 }}></div>
        <p className="font-sans font-bold tracking-tightest" style={{fontSize: '50px',zIndex: 2 }}>April 24, 2024</p>
        <p style={{fontSize: '30px', marginTop:'-10px', zIndex: 2}}>Clubhouse, BGC</p>
      </div>

      {/* Bottom-right landscape image */}
      <div className="bg-gray-800 p-4 rounded-3xl col-span-1 row-span-4 tracking-tightest" style={{ backgroundImage: `url(${heroBotBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      </div>

      
    </div>
    </>
    
  );
};

export default Home;
