import type { NextPage } from 'next';


const Home: NextPage = () => {
  const heroMainBg = require('/public/hero/hero_main_bg.jpg').default.src;

  return (
    <div className="text-white min-h-screen p-8 grid grid-cols-4 grid-rows-10 gap-6">
     
      <div className="bg-gray-800 rounded-lg col-span-1 row-span-6" style={{ height: '500px', overflow: 'hidden', position:'relative'}}>
        <video id="background-video" muted loop autoPlay style={{ width: '100%', height: '100%', objectFit: 'cover', top: 0, left: 0 }}>
          <source src="/hero/hero_left_bg.mp4" type="video/mp4" />
        </video>
        <div className='gradient-overlay' style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(14,14,14,0) 0%, rgba(14,14,14,1) 100%)', zIndex: 99 }}></div>
        <div className='flex flex-row justify-center' style={{ position: 'absolute', bottom: '40px', textAlign: 'center', color: 'white', zIndex: 100 }}>
          <p style={{ fontFamily: 'Inter, sans-serif', width:'70%',fontSize: '20px', lineHeight:'110%'}}>Make your next memory with the right people using our AI algorithm</p>
        </div>
      </div>
        
      {/* Middle-right register form */}
      <div className=" rounded-lg col-span-2 row-span-6">
        <p className="h-2/10">Join Marcus, Betty, James, and 500+ users and start meeting new matches!</p>
        <div className="flex flex-col justify-center items-center p-4 rounded-lg h-8/10" style={{ backgroundImage: `url(${heroMainBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          
          <h2 className="font-sans font-bold text-64 leading-tightest tracking-tightest w-8/12 text-center mb-4">Touch some grass with Matchstix</h2>
          <div className="relative mt-4 bg-white rounded overflow-hidden rounded-3xl shadow w-10/12">
            <input type="email" placeholder="Enter Your Email" className="p-4 pl-4 pr-20 w-full text-gray-700 rounded-3xl" />
            <button className="absolute inset-y-1 right-3 bg-orange hover:bg-orange-600 rounded-3xl text-white font-semibold py-2 px-6  h-8/10">
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-1 row-span-10 grid grid-cols-1 grid-rows-10 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg col-span-1 row-span-4">
          <h1>Make your next memory with the right people using our AI algorithm</h1>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg col-span-1 row-span-6">
          <p>Additional event details...</p>
        </div>
      </div>

      {/* Bottom-left event info */}
      <div className="bg-gray-800 p-4 rounded-lg col-span-2 row-span-4">
        <p>April 24, 2024 Clubhouse BGC</p>
      </div>

      {/* Bottom-right landscape image */}
      <div className="bg-gray-800 p-4 rounded-lg col-span-1 row-span-4">
        <p>Additional event details...</p>
      </div>

      
    </div>
  );
};

export default Home;
