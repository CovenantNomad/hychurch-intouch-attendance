import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import AttendanceMain from "./pages/attendance/AttendanceMain";
import AttendanceRegister from "./pages/attendance/AttendanceRegister";
import Onboarding from "./pages/auth/Onboarding";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/attendance" element={<AttendanceMain />} />
        <Route path="/attendance/register" element={<AttendanceRegister />} />
        <Route path="/attendance/edit" element={<AttendanceRegister />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
