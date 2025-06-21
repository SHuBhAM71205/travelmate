import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

export default function TripInfo() {
    const { loggedInUser, trips, setTrips, drivers, users } = useAppContext();

    const [driverTrips, setDriverTrips] = useState([]);

    useEffect(() => {
        setDriverTrips(
            trips.filter(
                (trip) =>
                    trip.driverEmail === loggedInUser.email &&
                    trip.status === "assigned"
            )
        );
    }, [trips]);

    const handleApproveTrip = (tripID) => {
        const updatedTrips = trips.map((trip) =>
            trip.id === tripID
                ? {
                      ...trip,
                      status: "approved",
                  }
                : trip
        );

        setTrips(updatedTrips);
    };

    const handleRejectTrip = (tripID) => {
        const updatedTrips = trips.map((trip) =>
            trip.id === tripID
                ? {
                      ...trip,
                      status: "pending",
                      driverEmail: null,
                  }
                : trip
        );

        setTrips(updatedTrips);
    };

    return (
        <div className="w-[100%]">
            {driverTrips.length > 0 ? (
                driverTrips.map((trip, index) => {
                    return (
                        <div
                            key={index}
                            className="flex gap-4 flex-col md:flex-row justify-evenly p-4 mt-4 bg-slate-300 rounded-2xl shadow-md"
                        >
                            <div className="flex flex-col flex-2/12 gap-2 justify-center">
                                <p>id:</p>
                                <p>{trip.id}</p>
                            </div>

                            <div className="flex flex-col flex-2/12 gap-2 justify-center">
                                <p>
                                    {trip.pickup} &rarr; {trip.destination}
                                </p>
                            </div>

                            <div className="flex flex-col flex-2/12 gap-2 justify-center">
                                <p>User: </p>
                                <p>
                                    {users.find(
                                        (user) => user.email === trip.userEmail
                                    )?.email || "N/A"}
                                </p>
                            </div>

                            <div className="flex flex-col flex-2/12 gap-2 justify-center">
                                <p>Cost : </p>
                                <p>₹ {trip.cost || 0}</p>
                            </div>

                            <div className="flex md:flex-col flex-2/12 gap-2 justify-center">
                                <button
                                    onClick={() => handleApproveTrip(trip.id)}
                                    className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded flex-1"
                                >
                                    Approved
                                </button>
                                <button
                                    onClick={() => handleRejectTrip(trip.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded flex-1"
                                >
                                    Reject
                                </button>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p className="p-4 bg-slate-100 text-black rounded-2xl">No pending Trips!</p>
            )}
        </div>
    );
}
