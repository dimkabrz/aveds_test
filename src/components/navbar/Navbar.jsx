import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../pages/toolkit/ToolkitSlice";
import MyModal from "../UI/modal/MyModal";
import { ReactComponent as MyLogo } from "../../assets/images/logo.svg";
import MyModalForm from "../UI/mymodalform/MyModalForm";
import classnames from 'classnames/bind';
import MyButton from "../UI/button/MyButton";

const cx = classnames.bind(classes);

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.toolkit.isAuth);

  const [modalActive, setModalActive] = useState(false);

  const logOut = () => {
    dispatch(setAuth(false));
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className={classes.navbar}>
      <MyModal active={modalActive} setActive={setModalActive}>
        <MyModalForm setActive={setModalActive} />
      </MyModal>
      <div className={classes.navbar_elements}>
        <MyLogo className={classes.logo_image} />
        <div className={classes.navbar_btns}>
          <Link to={`/contacts`} className={classes.contacts_link}>
            Контакты
          </Link>
          {isAuth ? (
            <MyButton className={cx('logout_btn')} onClick={logOut}>
              Выйти
            </MyButton>
          ) : (
            <MyButton
                className={cx('logout_btn')}
              onClick={() => {
                setModalActive(true);
              }}
            >
              Войти
            </MyButton>
          )}
        </div>
      </div>
      <hr className={classes.header_separator} />
    </div>
  );
};

export default Navbar;
