import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";

export const AppRouting: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/cadastro" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  );
}
