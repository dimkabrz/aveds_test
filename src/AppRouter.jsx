import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainpage/MainPage";
import Contacts from "./pages/contacts/Contacts";
import AuthPage from "./pages/authpage/AuthPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/userpage" element={<AuthPage />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};

export default AppRouter;
