import React, { useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import Header from "../components/home/common/header";
import Sidebar from "../components/home/common/sidebar";
import "./home.css";

function Home() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!localStorage.getItem('auth-data')) {
            navigate("/login");
        } else if (location.pathname === "/") {
            navigate("/calls");
        }
    }, []);

    return (
        <div className='home-container'>
            <Header />
            <div className='home-body'>
                <div className='home-sidebare'>
                    <Sidebar />
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Home