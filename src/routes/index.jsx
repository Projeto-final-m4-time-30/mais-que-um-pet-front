import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesTree = () => {
  return (
    <Routes>
      <Route path='/signin' element={<Login/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="*" element={<Navigate replace to="/signin" />} />
    </Routes>
  );
};

export default RoutesTree;
