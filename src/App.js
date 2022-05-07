import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { useRecoilValue } from "recoil";
import LoggedInRouter from "./routers/LoggedInRouter";
import LoggedOutRouter from "./routers/LoggedOutRouter";
import { authState } from "./stores/authState";

const queryClient = new QueryClient()

function App() {
  const { isLoggedIn } = useRecoilValue(authState)

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;