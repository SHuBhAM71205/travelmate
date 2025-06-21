import React, {useState} from "react";
import { useAppContext } from "../../context/AppContext";

import UserProfile from "./UserProfile";

export default function UserTripData() {
    const { trips, users, drivers, loggedInUser } = useAppContext();

    const userTrips = trips.filter(
        (trip) => trip.userEmail === loggedInUser.email
    );


    const [filters, setFilters] = useState([]);
    const options = ["rejected", "assigned", "approved", "pending"];

    const handleFilterChange = (status) => {
        if (filters.includes(status)) {
            setFilters(filters.filter((s) => s !== status));
        } else {
            setFilters([...filters, status]);
        }
    };

    const filteredTrips = userTrips.filter((trip) =>
        filters.length === 0 ? true : filters.includes(trip.status)
    );

    return (
        <div className="p-3 flex flex-col gap-3 w-full justify-center m-auto">
            <UserProfile
                TotalTripsNo={userTrips.length}
                ApprovedTripsNo={
                    userTrips.filter((t) => t.status === "approved").length
                }
            />
            <h2 className="text-xl font-medium text-shadow-sm shadow-md p-4 bg-slate-800 rounded-2xl text-center text-slate-50">
                User Trip Information
            </h2>

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

            {filteredTrips.length > 0 ? (
                filteredTrips.map((trip, index) => {
                    return (
                        <div
                            key={index}
                            className="flex gap-2 flex-col md:flex-row justify-evenly p-4 m-1 bg-slate-300 rounded-2xl shadow-md"
                        >
                            <div className="flex flex-col flex-2/12 justify-center">
                                <p>id:</p>
                                <p>{trip.id}</p>
                            </div>
                            <div className="flex flex-col flex-3/12 justify-center">
                                <p>
                                    {trip.pickup} &rarr; {trip.destination}
                                </p>
                            </div>

                            <div className="flex flex-col flex-3/12 gap-2 justify-center">
                                <p>Driver: </p>
                                <p>
                                    {trip.status === "approved"
                                        ? drivers.find(
                                              (driver) =>
                                                  driver.email ===
                                                  trip.driverEmail
                                          )?.email
                                        : "Not Assigned"}
                                </p>
                            </div>

                            <div className="flex flex-col flex-2/12 gap-2 justify-center">
                                <p>Cost : </p>
                                <p>₹ {trip.cost || 0}</p>
                            </div>

                            <div className="flex flex-col flex-2/12 justify-center">
                                {trip.status === "rejected" ? (
                                    <p className="bg-red-500 text-slate-50 p-4 rounded-2xl">
                                        {" "}
                                        Rejected{" "}
                                    </p>
                                ) : trip.status === "approved" ? (
                                    <p className="bg-green-500 text-slate-950 p-4 rounded-2xl">
                                        {" "}
                                        Approved{" "}
                                    </p>
                                ) : (
                                    <p className="bg-yellow-300 text-slate-950 p-4 rounded-2xl">
                                        {" "}
                                        Pending{" "}
                                    </p>
                                )}
                            </div>
                        </div>
                    );
                })
            ) : (
                <p className="p-4 bg-slate-100 text-black rounded-2xl">
                    No trips yet, book a trip!
                </p>
            )}
        </div>
    );
}
