import type { NextPage } from 'next';


const Home: NextPage = () => {
  const heroMainBg = require('/public/hero/hero_main_bg.jpg').default.src;
  const heroLeftBg = require('/public/hero/hero_left_bot_bg.jpg').default.src;
  const heroBotBg = require('/public/hero/hero_mid_bot_bg.jpg').default.src;
  const heroTopRightBg = require('/public/hero/hero_top_right.jpg').default.src;
  return (
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
  );
};

export default Home;
