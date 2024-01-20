import React, { useEffect, useState } from "react";
import useRessource from "../hooks/useRessource";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [authState, authRepo] = useRessource("auth");
    useEffect(() => {
        if(authState.data.token === null){
            console.log("Successfully Disconnected");
            navigate("/login");
        }
    }, [authState, navigate]);

    const handleDeconnect = () => {
        console.log("Deconnect Button Clicked");
        dispatch(authRepo.logout());
    };
    return (
        <div>
            <button onClick={handleDeconnect}>Disconnect</button>
        </div>
    );
}

export default Logout;
