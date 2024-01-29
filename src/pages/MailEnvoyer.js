import React from "react";
import ImgMessage from "../assets/img/bg-message.jpg";
import logo from "../assets/img/shutUpLogo.png";
import { useDispatch } from "react-redux";
import useRessource from "../hooks/useRessource";

function MailEnvoyer(props) {
    const dispatch = useDispatch();
    const [authState, authRepo] = useRessource("auth");

    const forgot = (e) => {
        e.preventDefault();
        dispatch(authRepo.forgot(props.email));
    };
    return (
        <div>
            <section className="bg-gray-50 text-slate-500 flex flex-col items-center justify-center p-6">
                <a
                    href="#"
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
                >
                    <img className="w-32" src={logo} alt="Shut-up" />
                </a>
                <form
                    name="resetForm"
                    className="space-y-4 md:space-y-6"
                    action="#"
                    onSubmit={forgot}
                >
                    <input type="hidden" name="email" value={props.email} />
                    <div className="flex flex-col md:flex-row items-center justify-center px-6 py-8 mx-auto lg:py-0 bg-white md:mt-0 rounded-lg shadow w-10/12">
                        <div className="w-full md:w-1/2">
                            <img className="" src={ImgMessage} alt="" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <p className="text-2xl md:text-3xl font-light leading-normal">
                                Password reset mail is sent to :{" "}
                            </p>
                            <p className="text-2xl md:text-3xl leading-normal font-bold mt-4">
                                {props.email}
                            </p>
                            <p className="mb-8 mt-8">
                                Chek your mailbox, if you haven't received it,
                                please click the button below.
                            </p>
                            <button
                                type="submit"
                                className="text-white bg-sky-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Send back
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default MailEnvoyer;
