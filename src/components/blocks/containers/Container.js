import React from 'react';

const Container = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-start xs:justify-center'>
      <div className='container h-screen px-4 xs:border xs:rounded-xl xs:max-w-lg'>
        {children}
      </div>
  </div>
  );
}

export default Container;