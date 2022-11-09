import { Route, Routes, Navigate } from "react-router-dom";
import ReactModalCoustom from "../components/ModalPet";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesTree = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate replace to="/signin" />} />

      <Route path="/modal" element={<ReactModalCoustom />} />
    </Routes>
  );
};

export default RoutesTree;
