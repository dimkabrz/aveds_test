import React, { useState } from "react";
import classes from "../../../pages/mainpage/MainPage.module.css";
import MyInput from "../myinput/MyInput";
import MyButton from "../button/MyButton";
import myJson from "../../../user.json";
import { setAuth, setRealUser } from "../../../pages/toolkit/ToolkitSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyModalForm = ({ setActive }) => {
  const [user, setUser] = useState({ login: "", password: "" });
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const passwordHandler = () => {
    if (user.password.length < 8) {
      setPasswordError("Пароль не может быть менее 8 символов");
      return true;
    } else {
      setPasswordError("");
      return false;
    }
  };
  const passwordChangeHandler = (e) => {
    setUser({ ...user, password: e.target.value });
    if (e.target.value.length > 8 && passwordError) {
      setPasswordError("");
    }
  };
  const logIn = (e) => {
    e.preventDefault();
    if (passwordHandler()) {
      return;
    }
    const realUser = myJson.users.find((item, index, array) => {
      return item.login === user.login && item.password === user.password;
    });
    if (realUser) {
      dispatch(setAuth(true));
      setActive(false);
      navigate("/userpage");
      dispatch(setRealUser(realUser));
      localStorage.setItem("token", realUser.name);
    }
  };

  return (
    <form className={classes.login_form}>
      <MyInput
        type="text"
        placeholder="Введите логин"
        value={user.login}
        autoComplete="current login"
        onChange={(e) => setUser({ ...user, login: e.target.value })}
      />
      <MyInput
        type="password"
        placeholder="Введите пароль"
        value={user.password}
        autoComplete="current-password"
        onChange={passwordChangeHandler}
        onBlur={passwordHandler}
      />
      <div className={classes.password_error}>{passwordError}</div>
      <MyButton onClick={logIn}>Войти</MyButton>
    </form>
  );
};

export default MyModalForm;
