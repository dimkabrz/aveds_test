import React from "react";
import classes from "./MyButton.module.css";
import classnames from 'classnames/bind';

const cx = classnames.bind(classes);

const MyButton = ({ children, className, ...props }) => {
  return (
    <button {...props} className={cx('myBtn', className)}>
      {children}
    </button>
  );
};

export default MyButton;
