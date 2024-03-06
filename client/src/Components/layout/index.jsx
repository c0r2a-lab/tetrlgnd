import React from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";

// Import Layouts
import Header from "./header";
import Footer from "./footer";

// Import CSS
import "./style.css";

const Layout = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <React.Fragment>
            <Header />
            {
                pathname !== "/" && pathname !== "/room" &&
                <div className="back-btn" onClick={() => navigate(-1)}>back</div>
            }
            <div className="menu-container">
                <Outlet />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Layout;