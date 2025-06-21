import React, { useState } from "react";
import UserNav from "./UserNav";
import { useAppContext } from "../../context/AppContext";

export default function UserPackage() {
    const { drivers, packages, packagesData, setPackagesData } =
        useAppContext();

    const availableSeats = (trip) => {
        let usedSeats = packagesData.reduce((used, packageBooked) => {
            if (packageBooked.id === trip.id) {
                return used + packageBooked.seats;
            } else {
                return used;
            }
        }, 0);

        return trip.seats - usedSeats;
    };

    function generateSeatOptions(seatCount) {
        const options = [];
        for (let i = 1; i <= seatCount; i++) {
            options.push(
                <option key={i} value={i}>
                    {i}
                </option>
            );
        }
        return options;
    }

    const bookPackage = (id) => {};

    return (
        <div className="flex">
            <UserNav />
            <div className="flex-1 mt-[20%] md:mt-0 md:ml-[20%] flex flex-col p-3">
                <h2 className="bg-slate-800 text-2xl text-slate-50 text-center font-semibold p-4 rounded-2xl">
                    Available Packages
                </h2>

                <div className="w-[100%] flex flex-col gap-4 mt-4">
                    {packages.map((packge, index) => {
                        return (
                            <div
                                className="flex flex-col gap-4  p-4  bg-slate-300 rounded-2xl shadow-md"
                                key={index}
                            >
                                <div className="flex  px-5 justify-between flex-col md:flex-row">
                                    <div className="flex flex-2/12 flex-col justify-center">
                                        <p>
                                            {packge.pickup} &rarr;{" "}
                                            {packge.destination}
                                        </p>
                                    </div>

                                    <div className="flex flex-2/12 flex-col justify-center">
                                        <p>
                                            {packge.startDate} &rarr;{" "}
                                            {packge.endDate}
                                        </p>
                                    </div>

                                    <div className="flex flex-2/12 flex-col justify-center">
                                        <p>Cost per Person : </p>
                                        <p>{packge.costPerPerson}</p>
                                    </div>

                                    <div className="flex flex-2/12 flex-col justify-center box-border">
                                        <label htmlFor="seats"> Seats:</label>
                                        <select
                                            name="seats"
                                            id="seats"
                                            className="border-none px-2 py-1 rounded-2xl bg-slate-100 mr-3"
                                        >
                                            {generateSeatOptions(
                                                availableSeats(packge)
                                            )}
                                        </select>
                                    </div>

                                    <div className="flex flex-2/12 flex-col justify-center">
                                        <p> Driver : </p>
                                        <p>
                                            {
                                                drivers.find(
                                                    (driver) =>
                                                        packge.driverEmail ===
                                                        driver.email
                                                )?.username
                                            }
                                        </p>
                                    </div>

                                    <div className="flex flex-2/12 flex-col justify-center">
                                        <button
                                            className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded flex-1"
                                            onClick={() =>
                                                bookPackage(packge.id)
                                            }
                                        >
                                            Book A trip!
                                        </button>
                                    </div>
                                </div>

                                <div className="px-5">
                                    <p> Places Covered : </p>
                                    <div className="flex flex-wrap gap-4">
                                        {packge.placesCovered.map(
                                            (place, index) => {
                                                return (
                                                    <div
                                                        className="inline-block px-3 p-2 rounded-2xl border"
                                                        key={index}
                                                    >
                                                        {place}
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
