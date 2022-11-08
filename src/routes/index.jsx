import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesTree = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path="/users" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="*" element={<Navigate replace to="/users" />} />
    </Routes>
  );
};

export default RoutesTree;
