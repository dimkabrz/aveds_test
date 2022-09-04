import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/router/AppRouter";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import { setAuth } from "./pages/toolkit/ToolkitSlice";
import { useDispatch } from "react-redux";

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(setAuth(true));
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
