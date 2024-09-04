import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Bikes } from "./pages/Bikes";
import { Toaster } from "sonner";
import { Login } from "./pages/Login";
import { AuthorizeUser, ProtectUser } from "./protected/AuthUser";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectUser>
              <Landing />
            </ProtectUser>
          }
        />
        <Route
          path="/bikes"
          element={
            <ProtectUser>
              <Bikes />
            </ProtectUser>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectUser>
              <Login />
            </ProtectUser>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
