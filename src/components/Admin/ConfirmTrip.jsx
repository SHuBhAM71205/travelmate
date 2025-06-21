import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function ConfirmTrip() {
    const { trips, setTrips, drivers, users } = useAppContext();
    const [pendingTrips, setPendingTrips] = useState([]);
    const [selectedDriverEmail, setSelectedDriverEmail] = useState("");
    const [selectedTripID, setSelectedTripID] = useState(null);

    const handleApproveTrip = (tripID) => {
        if (tripID !== selectedTripID || !selectedDriverEmail) {
            alert("Please select a driver before approving.");
            return;
        }

        const updatedTrips = trips.map((trip) =>
            trip.id === tripID
                ? {
                      ...trip,
                      status: "assigned",
                      driverEmail: selectedDriverEmail,
                  }
                : trip
        );

        setTrips(updatedTrips);
        setSelectedDriverEmail("");
        setSelectedTripID(null);
    };

    const handleRejectTrip = (tripID) => {
        const updatedTrips = trips.map((trip) =>
            trip.id === tripID
                ? {
                      ...trip,
                      status: "rejected",
                  }
                : trip
        );

        setTrips(updatedTrips);
    };

    useEffect(() => {
        let t = trips.filter((trip) => trip.status === "pending");
        setPendingTrips(t);
    }, [trips]);

    const isDateOverlap = (start1, end1, start2, end2) => {
        return !(
            new Date(end1) < new Date(start2) ||
            new Date(start1) > new Date(end2)
        );
    };

    const getAvailableDrivers = (trip) => {
        return drivers.filter((driver) => {
            if (driver.vehicleType !== trip.vehicle) return false;

            const assignedTrips = trips.filter(
                (t) => (t.driverEmail === driver.email)
            );

            const hasConflict = assignedTrips.some((existing) =>
                isDateOverlap(
                    trip.startDate,
                    trip.endDate,
                    existing.startDate,
                    existing.endDate
                )
            );

            return !hasConflict;
        });
    };

    return (
        <div className="flex ">
            <AdminNav />
            <div className="p-4 mt-[20%] md:mt-0 md:ml-[20%] w-full">
                <h2 className="bg-slate-800 text-2xl text-slate-50 text-center font-semibold p-4 rounded-2xl">
                    Confirm Pending Requests
                </h2>

                <div className="w-[100%]">
                    {pendingTrips.length === 0 ? (<p className="p-4 bg-slate-100 text-black rounded-2xl mt-2">
                        No pending Trips right now.
                    </p>) : null }
                    {pendingTrips.map((trip, index) => {
                        const user = users.find(
                            (u) => u.email === trip.userEmail
                        );
                        const availableDrivers = getAvailableDrivers(trip);

                        return (
                            <div
                                key={index}
                                className="flex gap-4 flex-col md:flex-row justify-evenly p-4 mt-4 bg-slate-300 rounded-2xl shadow-md"
                            >
                                <div className="flex flex-2/12 flex-col justify-center">
                                    <p>id:</p>
                                    <p>{trip.id}</p>
                                </div>

                                <div className="flex flex-2/12 flex-col justify-center">
                                    <p>
                                        {trip.pickup} &rarr; {trip.destination}
                                    </p>
                                </div>

                                <div className="flex flex-1/12 flex-col justify-center">
                                   
                                        <p>Vehicle:</p>
                                    <p>{trip.vehicle}</p>
                                   
                                </div>

                                <div className="flex flex-3/12 flex-col justify-center gap-2">
                                    <p>Driver: </p>
                                    <select
                                        name="driver"
                                        value={
                                            trip.id === selectedTripID
                                                ? selectedDriverEmail
                                                : ""
                                        }
                                        onChange={(e) => {
                                            setSelectedTripID(trip.id);
                                            setSelectedDriverEmail(
                                                e.target.value
                                            );
                                        }}
                                        className="border-none px-2 py-1 rounded-2xl bg-slate-100"
                                    >
                                        <option value="">
                                            -- Select Driver --
                                        </option>
                                        {availableDrivers.map((driver, i) => (
                                            <option
                                                key={i}
                                                value={driver.email}
                                            >
                                                {driver.username}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex flex-col flex-2/12 gap-2 justify-center">
                                    <p>Cost : </p>
                                    <p>₹ {trip.cost}</p>
                                </div>

                                <div className="flex md:flex-col flex-2/12 gap-2 justify-center">
                                    <button
                                        onClick={() =>
                                            handleApproveTrip(trip.id)
                                        }
                                        className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded flex-1"
                                    >
                                        Assign
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleRejectTrip(trip.id)
                                        }
                                        className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded flex-1"
                                    >
                                        Reject
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
