import classes from "./AuthPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import MyButton from "../../components/UI/button/MyButton";
import { useDispatch } from "react-redux";
import { setAuth } from "../toolkit/ToolkitSlice";
import classnames from 'classnames/bind';

const cx = classnames.bind(classes);

const AuthPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const realName = localStorage.getItem("token");
  const logout = () => {
    dispatch(setAuth(false));
    navigate("/");
  };

  return (
    <div className={classes.main_container}>
      <div className={classes.main_info}>
        <div className={classes.text_baner}>
          <h1>Привет, {realName}</h1>
        </div>
        <div className={classes.btn_bar}>
          <MyButton onClick={logout} className={cx('authPage_logout_btn')}>Выйти из аккаунта</MyButton>
          <Link className={classes.link_btn_contacts} to={`/contacts`}>
            Перейти в контакты
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
