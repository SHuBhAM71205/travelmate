import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import VehicleInfor from "./VehicleInfor";
import TripInfo from "./TripInfo";
import Card from "../General/Card";
import DriverNav from "./DriverNav";

export default function DriverDashboard() {
    const { loggedInUser, setLoggedInUser, trips, drivers, users } =
        useAppContext();
    const navigate = useNavigate();

    const driverTrips = trips.filter(
        (trip) => trip.driverEmail === loggedInUser.email
    );

    const currentDriver = drivers.find((d) => d.email === loggedInUser.email);

    const [driverData, setDriverData] = useState({
        totalTrips: 0,
        tripsAssigned: 0,
        tripsApprovd: 0,
        totalEarnings: 0,
    });

    useEffect(() => {
        let totalTrips = driverTrips.length;
        let tripsAssigned = driverTrips.reduce((assigned, trip) => {
            if (trip.status === "assigned" || trip.status === "approved") {
                return assigned + 1;
            } else {
                return assigned;
            }
        }, 0);
        let tripsApprovd = driverTrips.reduce((assigned, trip) => {
            if (trip.status === "approved") {
                return assigned + 1;
            } else {
                return assigned;
            }
        }, 0);

        let totalEarnings = driverTrips.reduce((total, trip) => {
            if (trip.cost && trip.status === "approved") {
                return total + trip.cost;
            } else {
                return total;
            }
        }, 0);

        setDriverData({
            totalTrips,
            tripsAssigned,
            tripsApprovd,
            totalEarnings,
        });
    }, [trips]);

    return (
        <div className="flex flex-col md:flex-row">
            <DriverNav />
            <div className="flex flex-col gap-2 md:ml-[20%] h-screen md:mt-0 mt-[20%] flex-1 p-5">
                <VehicleInfor
                    vehicleDetail={currentDriver?.vehicleType || "Not Assigned"}
                />
                <div className="md:mt-0 w-full flex-8/12 grid grid-cols-1 md:grid-cols-2 p-2">
                    <Card
                        title="Total Trips"
                        value={driverData.totalTrips}
                        iconStyle="fa fa-ticket"
                    />
                    <Card
                        title="Total Earnings"
                        value={driverData.totalEarnings}
                        iconStyle="fa fa-money"
                    />
                    <Card
                        title="Assigned Trips"
                        value={driverData.tripsAssigned}
                        iconStyle="fa fa-clock-o"
                    />
                    <Card
                        title="Approved Trips"
                        value={driverData.tripsApprovd}
                        iconStyle="fa fa-check-square"
                    />
                </div>
            </div>
        </div>
    );
}
