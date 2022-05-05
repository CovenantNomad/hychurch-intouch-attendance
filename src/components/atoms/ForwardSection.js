import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io'
import { Link } from 'react-router-dom';

const ForwardSection = () => {
  return (
    <div className='flex justify-end my-10'>
      <div className='w-1/2'>
        <div className='h-[3px] bg-black'/>
        <div className='flex justify-between mt-1 items-center'>
          <h4 className='font-light'>LOGIN</h4>
          <div className='p-2 pr-0'>
            <Link to="/signin">
              <IoIosArrowRoundForward className='h-6 w-6'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForwardSection;