import React, { useState } from "react";
import classes from "./MainPage.module.css";
import MyButton from "../../components/UI/button/MyButton";
import { Link, useNavigate } from "react-router-dom";
import MyModal from "../../components/UI/modal/MyModal";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../toolkit/ToolkitSlice";
import { ReactComponent as MyLogo1 } from "../../assets/images/circle sec-.svg";
import { ReactComponent as MyLogo2 } from "../../assets/images/circle sec-2.svg";
import { ReactComponent as MyLogo3 } from "../../assets/images/circle sec-3.svg";
import MyModalForm from "../../components/UI/mymodalform/MyModalForm";
import classnames from 'classnames/bind';

const cx = classnames.bind(classes);

const MainPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.toolkit.isAuth);
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(setAuth(false));
    navigate("/");
    localStorage.removeItem('token');
  };
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={classes.main_container}>
      <MyModal active={modalActive} setActive={setModalActive}>
        <MyModalForm setActive={setModalActive} />
      </MyModal>
      <div className={classes.main_info}>
        <div className={classes.text_baner}>
          <h1>Место для получения медицинской помощи</h1>
        </div>
        <div className={classes.btn_bar}>
          {isAuth ? (
            <MyButton  className={cx('main_enter_button')} onClick={logOut}>
              Выйти
            </MyButton>
          ) : (
            <MyButton
                className={cx('main_enter_button')}
              onClick={() => {
                setModalActive(true);
              }}
            >
              Войти
            </MyButton>
          )}
          <Link className={classes.link_btn_contacts} to={`/contacts`}>
            Контакты
          </Link>
        </div>
      </div>

      <div className={classes.info_content}>
        <div className={classes.info_module}>
          <div className={classes.info_module_content}>
            <MyLogo1 className={classes.image_1} />
            Онлайн-прием
            <hr className={classes.info_module_separator} />
            <span className={classes.info_module_content_text}>
              Рыба текст
            </span>
          </div>

        </div>
        <div className={classes.info_module}>
          <div className={classes.info_module_content}>
            <MyLogo2 className={classes.image_2} />
            Экстренный случай
            <hr className={classes.info_module_separator} />
            <span className={classes.info_module_content_text}>
              Рыба текст
            </span>
          </div>
        </div>
        <div className={classes.info_module}>
          <div className={classes.info_module_content}>
            <MyLogo3 className={classes.image_3} />
            Лечение рака
            <hr className={classes.info_module_separator} />
            <span className={classes.info_module_content_text}>
              Рыба текст
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
