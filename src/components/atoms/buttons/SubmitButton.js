import React from 'react';
import Spinner from '../Spinner/Spinner';

const SubmitButton = ({ label, isLoading }) => {
  return (
    <button 
      type="submit"
      className='py-3 px-4 w-full border border-transparent shadow-md rounded-lg text-white text-sm font-medium bg-black focus:outline-none'
    >
      {isLoading ? <Spinner size="sm" color="blue" /> : label}
    </button>
  );
}

export default SubmitButton;