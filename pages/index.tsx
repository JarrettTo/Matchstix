import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="text-white min-h-screen p-8 grid grid-cols-4 grid-rows-10 gap-4">
     
      <div className="bg-gray-800 p-4 rounded-lg col-span-1 row-span-6">
        <h1>Make your next memory with the right people using our AI algorithm</h1>
      </div>

    
      {/* Middle-right register form */}
      <div className=" rounded-lg col-span-2 row-span-6">
        <p className="h-2/10">Join Marcus, Betty, James, and 500+ users and start meeting new matches!</p>
        <div className="bg-gray-800 p-4 rounded-lg h-8/10">
          
          <h2>Touch some grass with Matchstix</h2>
          <input type="email" placeholder="Enter Your Email" className="mt-4 p-2 rounded" />
          <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Register
          </button>
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
