import { Routes, Route, Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext.jsx";

import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx"

import UserDashboard from "../components/User/UserDashboard.jsx";
import UserTripBooking from "../components/User/UserTripBooking.jsx";
import UserPackage from "../components/User/UserPackage.jsx";

import AdminDashboard from "../components/Admin/AdminDashboard.jsx";
import ConfirmTrip from "../components/Admin/ConfirmTrip.jsx";
import AllTrips from "../components/Admin/AllTrips.jsx";
import AdminPackages from "../components/Admin/AdminPackages.jsx";

import DriverDashboard from "../components/Driver/DriverDashboard.jsx";
import DriverTrip from "../components/Driver/DriverTrip.jsx";
import DriverPackageDisplay from "../components/Driver/DriverPackageDisplay.jsx"
import DriverAlltrip from "../components/Driver/DriverAlltrip.jsx"
import Schedule from "../components/Driver/Schedule.jsx";


export default function AppRouter() {
    const {loggedInUser} = useAppContext();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />



            <Route
                path="/user/dashboard"
                element={
                    loggedInUser?.role === "user" ? (
                        <UserDashboard />
                    ) : (
                        <Navigate to="/login" />
                    )
                }
            />
            

            <Route
                path="/user/booktrip"
                element={
                    loggedInUser?.role === "user" ? (
                        <UserTripBooking />
                    ) : (
                        <Navigate to="/login" />
                    )
                }
            />

            <Route
                path="/user/packages"
                element={
                    loggedInUser?.role === "user" ? (
                        <UserPackage />
                    ) : (
                        <Navigate to="/login" />
                    )
                }
            />

            {/* Admin Routes i have placed here, so if we we want to change directly available */}

            <Route
                path="/admin/dashboard"
                element={
                    loggedInUser?.role === "admin" ? (
                        <AdminDashboard />
                    ) : (
                        <Navigate to="/login" />
                    )
                }
            />

            <Route
                path="/admin/confirmtrip"
                element={
                    loggedInUser?.role === "admin" ? (
                        <ConfirmTrip />
                    ) : (
                        <Navigate to="/login" />
                    )
                }
            />

            <Route
                path="/admin/alltrips"
                element={
                    loggedInUser?.role === "admin" ? (
                        <AllTrips />
                    ) : (
                        <Navigate to="/login" />
                    )
                }
            />

            <Route
                path="/admin/packages"
                element={
                    loggedInUser?.role === "admin" ? (
                        <AdminPackages />
                    ) : (
                        <Navigate to="/login" />
                    )
                }
            />
            {/* Driver routes */}
            <Route
                path="/driver/schedule"
                element={
                    loggedInUser?.role === "driver" ? (
                        <Schedule/>
                    ) : (
                        <Navigate to="/login" />
                    )
                }
            />
            <Route
                path="/driver/dashboard"
                element={
                    loggedInUser?.role === "driver" ? (
                        <DriverDashboard />
                    ) : (
                        <Navigate to="/login" />
                    )
                }
            />
            <Route
                path="/driver/pendingtrips"
                element={
                    loggedInUser?.role === "driver" ? (
                        <DriverTrip />
                    ) : (
                        <Navigate to="/login" />
                    )
                }
            />

            <Route
                path="/driver/alltrips"
                element={
                    loggedInUser?.role === "driver" ? (
                        <DriverAlltrip />
                    ) : (
                        <Navigate to="/login" />
                    )
                }
            />

            <Route
                path="/driver/packages"
                element={
                    loggedInUser?.role === "driver" ? (
                        <DriverPackageDisplay />
                    ) : (
                        <Navigate to="/login" />
                    )
                }
            />
        </Routes>
    );
}
