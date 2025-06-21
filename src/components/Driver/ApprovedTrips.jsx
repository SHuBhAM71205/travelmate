import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

export default function ApprovedTrip() {
    const { loggedInUser, trips, users } = useAppContext();

    const [driverTrips, setDriverTrips] = useState([]);

    useEffect(() => {
        setDriverTrips(
            trips.filter((trip) => (trip.driverEmail === loggedInUser.email && trip.status === "approved"))
        );
    }, [trips]);

    

    return (
        <div className="w-[100%]">
            {driverTrips.length > 0 ? (
                driverTrips.map((trip, index) => {
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
    
                            <div className="flex flex-2/12 flex-col justify-center gap-2">
                                <p>User: </p>
                                <p>
                                    {users.find(
                                        (user) => user.email === trip.userEmail
                                    )?.email || "N/A"}
                                </p>
                            </div>
    
                            <div className="flex flex-2/12 flex-col justify-center gap-2">
                                <p>Cost : </p>
                                <p>₹ {trip.cost || 0}</p>
                            </div>
    
                            <div className="flex flex-2/12 flex-col justify-center">
                                <div
                                    className="bg-green-500 text-white p-4 rounded-2xl"
                                >
                                    Approved
                                </div>
                            </div>
                        </div>
                    );
                })

            ) : (
                <p className="p-4 bg-slate-100 text-black rounded-2xl">No Trips!</p>
            )}
        </div>
    );
}
