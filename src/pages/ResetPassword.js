import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logo from "../assets/img/shutUpLogo.png";
import useRessource from "../hooks/useRessource";
import { useDispatch } from "react-redux";
import Button from "../components/ui/Button";
import ErrorMessage from "../components/ui/ErrorMessage";

function ResetPassword() {
    const navigate = useNavigate();
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [authState, authRepo] = useRessource("auth");
    const { error, loading, data = null } = authState;
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            ErrorMessage.error(error);
            setErrorMessage(error);
        } else if (data.message) {
            ErrorMessage.success(data.message);
            navigate("/login");
        }
    }, [authState, data, error]);

    const reset = (e) => {
        e.preventDefault();
        dispatch(authRepo.reset(newPassword, token));
    };

    return (
        <div>
            <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a
                        href="#"
                        className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
                    >
                        <img className="w-32" src={logo} alt="Shut-up" />
                    </a>
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Reset Password
                            </h1>
                            <form
                                name="resetForm"
                                className="space-y-4 md:space-y-6"
                                action="#"
                                onSubmit={reset}
                            >
                                <div>
                                    <label
                                        htmlFor="newPassword"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        New password :
                                    </label>
                                    <input
                                        type="password"
                                        name="newPassword"
                                        value={newPassword}
                                        id="newPassword"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        onChange={(e) => {
                                            setNewPassword(e.target.value);
                                        }}
                                        required
                                    />
                                    {errorMessage && (
                                        <div className="block mb-2 text-sm font-medium text-red-900">
                                            {errorMessage}
                                        </div>
                                    )}
                                </div>
                                <Button
                                    loading={loading}
                                    buttonText="Reset password"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ResetPassword;
