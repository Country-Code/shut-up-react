import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useRessource from "../../../../../hooks/useRessource";

function Disconnect() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [authState, authRepo] = useRessource("auth");
    useEffect(() => {
        if (authState.data.token === null) {
            console.log("Successfully Disconnected");
            navigate("/login");
        }
    }, [authState, navigate]);

    const handleDisconnect = () => {
        console.log("Deconnect Button Clicked");
        dispatch(authRepo.logout());
    };
    return (
        <div>
            <div className="border-t border-gray-300"></div>
            <button className="dropdown-item" onClick={handleDisconnect}>
                Disconnect
            </button>
        </div>
    );
}

export default Disconnect;
