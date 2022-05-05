import React from 'react';

const SubmitButton = ({ label }) => {
  return (
    <button 
      type="submit"
      className='py-2 px-4 w-full border border-transparent shadow-md rounded-md text-white text-sm font-medium bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
    >
      {label}
    </button>
  );
}

export default SubmitButton;