import React, { useState } from 'react';

// components
import Container from '../../components/blocks/containers/Container';
import MainHero from '../../components/blocks/heros/MainHero';
import MainNavbar from '../../components/blocks/navbars/MainNavbar';

const AttendanceMain = () => {
  const [ isSubmitted, setIsSubmitted ] = useState(false)

  return (
    <Container>
      <MainNavbar />
      <MainHero isSubmitted={isSubmitted} />
      <div className='mt-10'>
        <div className='flex justify-between items-center'>
          <h6 className='text-xl tracking-wide'>이번주 <span className='font-bold'>출석현황</span></h6>
          <button className={`${isSubmitted ? "bg-alice-blue": "bg-cosmic-latte"} px-4 py-2 rounded-2xl`}>
            <span className={`${isSubmitted ? "text-blue-600": "text-teal-600"}`}>{isSubmitted ? "수정 🛠" : "작성 🖊"}</span>
          </button>
        </div>
      </div>
    </Container>
  );
}

export default AttendanceMain;