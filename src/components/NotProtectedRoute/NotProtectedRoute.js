import React from "react";
import { Navigate } from "react-router-dom";

const NotProtectedRoute = ({ component: Component, ...props }) => {
    return (
        ! props.loggedIn ? <Component {...props} /> : <Navigate to="/" />
    );
};

export default NotProtectedRoute;
