import React from 'react';
import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
    return (
        <div className={classes.main_container}>
            <div className={classes.text_content}>
                <h1>Данная страница не найдена</h1>
            </div>
        </div>
    );
};

export default ErrorPage;