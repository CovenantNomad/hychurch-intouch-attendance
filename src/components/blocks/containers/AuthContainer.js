import React from 'react';

const AuthContainer = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-start xs:justify-center'>
      <div className='container px-4 xs:border xs:rounded-xl xs:max-w-lg'>
        {children}
      </div>
    </div>
  );
}

export default AuthContainer;