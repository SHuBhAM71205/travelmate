import React, { useState } from "react";
import AdminNav from "./AdminNav";
import { useAppContext } from "../../context/AppContext";

export default function AllTrips() {
    const { trips, drivers, users } = useAppContext();
    const [filters, setFilters] = useState([]);
    const options = ["rejected", "assigned", "approved", "pending"];

    const handleFilterChange = (status) => {
        if (filters.includes(status)) {
            setFilters(filters.filter((s) => s !== status));
        } else {
            setFilters([...filters, status]);
        }
    };

    const filteredTrips = trips.filter((trip) =>
        filters.length === 0 ? true : filters.includes(trip.status)
    );

    return (
        <div className="flex ">
            <AdminNav />
            <div className="p-4 mt-[20%] md:mt-0 md:ml-[20%] w-full">
                <h2 className="bg-slate-800 text-2xl text-slate-50 text-center font-semibold p-4 rounded-2xl">
                    All trips
                </h2>

                <div className="w-full h-[100%] flex flex-col">
                    <div className="flex flex-wrap gap-4 my-4">
                        {options.map((status) => (
                            <label
                                key={status}
                                className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    value={status}
                                    checked={filters.includes(status)}
                                    onChange={() => handleFilterChange(status)}
                                />
                                <span className="capitalize">{status}</span>
                            </label>
                        ))}
                        <button
                            onClick={() => setFilters([])}
                            className="bg-blue-500 text-white px-4 py-2 rounded-xl"
                        >
                            Clear Filters (All)
                        </button>
                    </div>

                    <div>
                        {filteredTrips.length > 0 ? (
                            filteredTrips.map((trip, index) => {
                                const user = users.find(
                                    (u) => u.email === trip.userEmail
                                );
                                // const availableDrivers = getAvailableDrivers(trip);
    
                                return (
                                    <div
                                        key={index}
                                        className="flex gap-4 flex-col md:flex-row justify-evenly p-4 mt-4 bg-slate-300 rounded-2xl shadow-md flex-1"
                                    >
                                        <div className="flex flex-2/12 flex-col justify-center">
                                            <p>id:</p>
                                            <p>{trip.id}</p>
                                        </div>
    
                                        <div className="flex flex-2/12 flex-col gap-2 justify-center">
                                            <p>User: </p>
                                            <p>
                                                {trip.userEmail
                                                    ? users.find(
                                                          (user) =>
                                                              user.email ===
                                                              trip.userEmail
                                                      ).username
                                                    : "Not Assigned"}
                                            </p>
                                        </div>
    
                                        <div className="flex flex-2/12 flex-col justify-center">
                                            <p>
                                                {trip.pickup} &rarr; {trip.destination}
                                            </p>
                                        </div>
    
                                        <div className="flex flex-2/12 flex-col gap-2 justify-center">
                                            <p>Driver: </p>
                                            <p>
                                                {trip.driverEmail
                                                    ? drivers.find(
                                                          (drv) =>
                                                              drv.email ===
                                                              trip.driverEmail
                                                      ).username
                                                    : "Not Assigned"}
                                            </p>
                                        </div>
    
                                        <div className="flex flex-col flex-2/12 gap-2 justify-center">
                                            <p>Cost : </p>
                                            <p>₹ {trip.cost || 0}</p>
                                        </div>
    
                                        <div className="flex flex-col flex-2/12 gap-2 justify-center">
                                            <p
                                                className={`${
                                                    trip.status === "rejected"
                                                        ? "bg-red-500 text-slate-50"
                                                        : trip.status === "approved"
                                                        ? "bg-green-500"
                                                        : "bg-yellow-300"
                                                } p-4 rounded-2xl`}
                                            >
                                                {trip.status}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })

                        ) : (<p className="p-4 bg-slate-100 text-black rounded-2xl">No Trips!</p>)}
                    </div>
                </div>
            </div>
        </div>
    );
}
