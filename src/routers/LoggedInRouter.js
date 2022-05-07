import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AttendanceConfirm from '../pages/attendance/AttendanceConfirm';
import AttendanceMain from '../pages/attendance/AttendanceMain';

const LoggedInRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AttendanceMain/>}/>
      <Route path="/confirm" element={<AttendanceConfirm/>}/>
    </Routes>
  );
}

export default LoggedInRouter;