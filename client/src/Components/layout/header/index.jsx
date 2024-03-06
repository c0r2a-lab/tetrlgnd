import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import SignIn from "../../../pages/authentication/signin";
import SignUp from "../../../pages/authentication/signup";

// Import Constants
import _HEADLINE from "../../../constants/header.constant";

// Import Style
import "./style.scss";

const Header = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const auths = useSelector(state => state.auths);
    const [isSignIn, setIsSignIn] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(true);

    useEffect(() => {
        if (auths.isAuthenticated) setIsModalOpen(false);
    }, [auths])

    return (
        <>
            <div className={["header", pathname === "/" ? "home-header" : `${pathname.split("/")[1]}-header`].join(" ")}>
                {
                    pathname === "/room" ?
                        <div className="exit-button" onClick={() => navigate(-1)}>exit</div> :
                        <div className="header-title">{pathname === "/" ? "Home" : pathname.split("/")[1]}</div>
                }
                <div className="header-card auth-header">
                    <div className="header-user">
                        <h1>Pegasus</h1>
                        <p>Anonymous</p>
                    </div>
                    <div>
                        <img />
                    </div>
                </div>
            </div>

            <Modal open={isModalOpen} footer={null} closable={false}>
                {
                    isSignIn ?
                    <SignIn /> :
                    <SignUp />
                }
                <button onClick={() => setIsSignIn(!isSignIn)}>{ isSignIn ? "SignUp" : "SignIn" }</button>
            </Modal>
        </>
    )
}

export default Header;