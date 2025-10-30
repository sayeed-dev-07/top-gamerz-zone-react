import { Outlet } from 'react-router';
import Navbar from './components/Navbar';
import { useState } from 'react';
import './index.css';
import { Toaster } from "react-hot-toast";

function App() {
  const [favArr, setFavArr] = useState([]);

  return (

    <>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <div className='bg-[#0a0a0a] text-white flex-1 px-[5%]'>
          <Outlet context={[favArr, setFavArr]} />
        <Toaster position="top-center" reverseOrder={false} />
        </div>
      </div>
    </>
  );
}

export default App;
