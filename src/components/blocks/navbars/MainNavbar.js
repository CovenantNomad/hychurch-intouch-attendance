import React from 'react';

const MainNavbar = () => {
  return (
    <div className='h-16 flex items-center justify-between'>
      <button 
        onClick={() => console.log("menu Click")}
        className="py-2 pr-2"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H17" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 6H21" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 18H13" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button 
        onClick={() => console.log("avatar Click")}
        className='py-2 pl-2'
      >
        <div className='h-8 w-8 rounded-full bg-golden-glow flex items-center justify-center'>
          <p className='text-sm text-white'>정훈</p>
        </div>
      </button>
    </div>
  );
}

export default MainNavbar;