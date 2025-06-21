import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

export default function DriverNav() {
    const { setLoggedInUser } = useAppContext();
    const [mobileMenu, setMobileMenu] = useState(false);

    const navigate = useNavigate();
    return (
        <>
            {!mobileMenu && (
                <div className="flex fixed md:hidden h-[10%] z-10 bg-slate-50 shadow-2xl p-5 w-full justify-between items-center">
                    <button
                        className="rounded-xl shadow-md p-4"
                        onClick={() => setMobileMenu(true)}
                    >
                        <i className="fa fa-bars text-2xl" aria-hidden="true" />
                    </button>
                    <h2 className="text-xl font-semibold">Driver Panel</h2>
                </div>
            )}

            {mobileMenu && (
                <div className="fixed md:hidden h-screen bg-slate-950 text-white  p-5 w-full justify-between items-center transition-all duration-300 ease-in-out flex flex-col z-10">
                    <div className="flex justify-between p-4 items-center w-full">
                        <h2 className="text-xl font-semibold">Driver Panel</h2>
                        <button
                            className="rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow bg-slate-800"
                            onClick={() => setMobileMenu(false)}
                        >
                            <i
                                className="fa fa-times text-2xl"
                                aria-hidden="true"
                            />
                        </button>
                    </div>

                    <nav className="flex flex-1 flex-col mt-5 transition-all duration-200 ease-linear w-full">
                        <NavLink
                            to="/driver/dashboard"
                            className={({ isActive }) =>
                                `py-4 w-full px-3 transition-all duration-200 ease-linear ${
                                    isActive
                                        ? "bg-slate-900 text-slate-50 font-semibold"
                                        : "hover:bg-slate-900"
                                }`
                            }
                            style={{ textDecoration: "none", color: "#F8FAFC" }}
                        >
                            Dashboard
                        </NavLink>

                        <NavLink
                            to="/driver/pendingtrips"
                            className={({ isActive }) =>
                                `py-4 w-full px-3 transition-all duration-200 ease-linear ${
                                    isActive
                                        ? "bg-slate-900 text-slate-50 font-semibold"
                                        : "hover:bg-slate-900"
                                }`
                            }
                            style={{ textDecoration: "none", color: "#F8FAFC" }}
                        >
                            Pending Approvals
                        </NavLink>

                        <NavLink
                            to="/driver/alltrips"
                            className={({ isActive }) =>
                                `py-4 w-full px-3 transition-all duration-200 ease-linear ${
                                    isActive
                                        ? "bg-slate-900 text-slate-50 font-semibold"
                                        : "hover:bg-slate-900"
                                }`
                            }
                            style={{ textDecoration: "none", color: "#F8FAFC" }}
                        >
                            All trips
                        </NavLink>

                        <NavLink
                            to="/driver/packages"
                            className={({ isActive }) =>
                                `py-4 w-full px-3 transition-all duration-200 ease-linear ${
                                    isActive
                                        ? "bg-slate-900 text-slate-50 font-semibold"
                                        : "hover:bg-slate-900"
                                }`
                            }
                            style={{ textDecoration: "none", color: "#F8FAFC" }}
                        >
                            Packages
                        </NavLink>

                        <NavLink
                            to="/driver/schedule"
                            className={({ isActive }) =>
                                `py-4 w-full px-3 transition-all duration-200 ease-linear ${
                                    isActive
                                        ? "bg-slate-900 text-slate-50 font-semibold"
                                        : "hover:bg-slate-900"
                                }`
                            }
                            style={{ textDecoration: "none", color: "#F8FAFC" }}
                        >
                            Schedule
                        </NavLink>

                    </nav>
                        <button
                            onClick={() => {
                                setLoggedInUser(null);
                                navigate("/login");
                            }}
                            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mx-3 mt-5 w-full"
                        >
                            Logout
                        </button>
                </div>
            )}

            <div className="hidden w-[100%] md:flex p-2 flex-col md:fixed md:left-0 md:top-0  md:w-[20%] bg-slate-950 text-white h-screen">
                <h2 className="text-xl font-bold mb-6 p-3">Driver Panel</h2>

                <nav className="flex flex-1 flex-col mt-5 transition-all duration-200 ease-linear">
                    <NavLink
                            to="/driver/dashboard"
                            className={({ isActive }) =>
                                `py-4 w-full px-3 transition-all duration-200 ease-linear ${
                                    isActive
                                        ? "bg-slate-900 text-slate-50 font-semibold"
                                        : "hover:bg-slate-900"
                                }`
                            }
                            style={{ textDecoration: "none", color: "#F8FAFC" }}
                        >
                            Dashboard
                        </NavLink>

                        <NavLink
                            to="/driver/pendingtrips"
                            className={({ isActive }) =>
                                `py-4 w-full px-3 transition-all duration-200 ease-linear ${
                                    isActive
                                        ? "bg-slate-900 text-slate-50 font-semibold"
                                        : "hover:bg-slate-900"
                                }`
                            }
                            style={{ textDecoration: "none", color: "#F8FAFC" }}
                        >
                            Pending Approvals
                        </NavLink>

                        <NavLink
                            to="/driver/alltrips"
                            className={({ isActive }) =>
                                `py-4 w-full px-3 transition-all duration-200 ease-linear ${
                                    isActive
                                        ? "bg-slate-900 text-slate-50 font-semibold"
                                        : "hover:bg-slate-900"
                                }`
                            }
                            style={{ textDecoration: "none", color: "#F8FAFC" }}
                        >
                            All trips
                        </NavLink>

                        <NavLink
                            to="/driver/packages"
                            className={({ isActive }) =>
                                `py-4 w-full px-3 transition-all duration-200 ease-linear ${
                                    isActive
                                        ? "bg-slate-900 text-slate-50 font-semibold"
                                        : "hover:bg-slate-900"
                                }`
                            }
                            style={{ textDecoration: "none", color: "#F8FAFC" }}
                        >
                            Packages
                        </NavLink>
                        
                        <NavLink
                            to="/driver/schedule"
                            className={({ isActive }) =>
                                `py-4 w-full px-3 transition-all duration-200 ease-linear ${
                                    isActive
                                        ? "bg-slate-900 text-slate-50 font-semibold"
                                        : "hover:bg-slate-900"
                                }`
                            }
                            style={{ textDecoration: "none", color: "#F8FAFC" }}
                        >
                            Schedule
                            </NavLink>

                </nav>
                        <button
                            onClick={() => {
                                setLoggedInUser(null);
                                navigate("/login");
                            }}
                            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mx-3 mt-5 "
                        >
                            Logout
                        </button>
            </div>
        </>
    );
}
