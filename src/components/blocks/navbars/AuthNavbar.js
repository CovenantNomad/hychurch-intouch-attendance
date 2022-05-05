import React from 'react';
import { Link } from 'react-router-dom';

const AuthNavbar = () => {
  return (
    <div className='h-16 relative flex items-center'>
      <div className='absolute inset-y-0 left-0 flex items-center'>
        <div className='p-2 pl-0 rounded-full'>
          <Link to="/">
            <img 
              className='h-8 w-8 bg-gray-400 rounded-full' 
              src={require('../../../assets/img/Intouch.png')}
              alt="intouch logo"
            />
          </Link>
        </div>
        <h1 className='text-lg font-bold'>INTOUCH 청년교회</h1>
      </div>
    </div>
  );
}

export default AuthNavbar;