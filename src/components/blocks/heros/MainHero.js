import React from 'react';

const MainHero = ({ isSubmitted }) => {
  return (
    <div className='mt-6'>
      <h5 className='text-2xl font-bold'>남정훈셀</h5>
      <div className={`${isSubmitted ? "bg-cosmic-latte" : "bg-cosmos"} mt-4 py-3 px-2 rounded-md`}>
        <span className={`${isSubmitted ? "text-teal-600" : "text-red-600"} text-sm`}>
          {isSubmitted ? "(완료) 출석체크가 제출되었습니다" : "(중요) 5월 29일 출석체크가 제출되지 않았습니다"}
        </span>
      </div>
    </div>
  );
}

export default MainHero;