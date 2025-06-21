// import { useState } from 'react'
import React, { useState } from "react";
import AdminNav from "./AdminNav";
import { useAppContext } from "../../context/AppContext";

export default function AdminPackages() {
    const { drivers, packages, setPackages } = useAppContext();

    const [pickup, setPickup] = useState("");
    const [destination, setDestination] = useState("");
    const [costPerPerson, setCostPerPerson] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [seats, setSeats] = useState("");
    const [place, setPlace] = useState("");
    const [placesCovered, setPlacesCovered] = useState([]);
    const [selectedDriverEmail, setSelectedDriverEmail] = useState("");

    const handlePlaceAddition = (e) => {
        e.preventDefault();
        if (!place) return;
        setPlacesCovered((prev) => [...prev, place]);
        setPlace("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !pickup ||
            !destination ||
            !startDate ||
            !endDate ||
            !selectedDriverEmail ||
            costPerPerson <= 0 ||
            seats <= 0
        ) {
            alert("You submitted with some invalid/empty field");
            return;
        }

        let PackageObj = {
            id: packages[packages.length - 1].id + 1,
            pickup,
            destination,
            costPerPerson,
            startDate,
            endDate,
            seats,
            driverEmail: selectedDriverEmail,
            placesCovered,
        };

        setPackages((prev) => [...prev, PackageObj]);
        alert("Package added Successfully!");

        setPickup("");
        setDestination("");
        setCostPerPerson("");
        setStartDate("");
        setEndDate("");
        setSeats("");
        setSelectedDriverEmail("");
        setPlacesCovered([]);
    };

    return (
        <div className="flex">
            <AdminNav />

            <div className="flex-1 mt-[20%] md:mt-0 md:ml-[20%] flex flex-col p-3">
                <div>
                    <h2 className="bg-slate-800 text-2xl text-slate-50 text-center font-semibold p-4 rounded-2xl">
                        Add Package
                    </h2>

                    <form>
                        <div className="w-[100%] flex flex-col gap-3 mt-3 mb-4 p-4 bg-slate-200 rounded-2xl">
                            <div className="flex flex-col md:flex-row md:items-center">
                                <label
                                    htmlFor="pickup"
                                    className="flex-1 md:flex-4/12"
                                >
                                    {" "}
                                    Pickup:{" "}
                                </label>
                                <input
                                    className="flex-1 md:flex-8/12  bg-slate-100 rounded-2xl p-2"
                                    type="text"
                                    placeholder="pickup"
                                    name="pickup"
                                    id="pickup"
                                    value={pickup}
                                    onChange={(e) => setPickup(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center">
                                <label
                                    htmlFor="destination"
                                    className="flex-1 md:flex-4/12"
                                >
                                    {" "}
                                    Destination:{" "}
                                </label>
                                <input
                                    className="flex-1 md:flex-8/12 bg-slate-100 rounded-2xl p-2"
                                    type="text"
                                    placeholder="destination"
                                    name="destination"
                                    id="destination"
                                    value={destination}
                                    onChange={(e) =>
                                        setDestination(e.target.value)
                                    }
                                />
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center">
                                <label
                                    htmlFor="costPerPerson"
                                    className="flex-1 md:flex-4/12"
                                >
                                    {" "}
                                    Cost Per person:{" "}
                                </label>
                                <input
                                    className="flex-1 md:flex-8/12 bg-slate-100 rounded-2xl p-2"
                                    type="number"
                                    placeholder="costPerPerson"
                                    name="costPerPerson"
                                    id="costPerPerson"
                                    min={0}
                                    value={costPerPerson}
                                    onChange={(e) =>
                                        setCostPerPerson(Number(e.target.value))
                                    }
                                />
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center">
                                <label
                                    className="flex-1 md:flex-4/12"
                                    htmlFor="startDate"
                                >
                                    {" "}
                                    Start Date:{" "}
                                </label>
                                <input
                                    className="flex-1 md:flex-8/12 bg-slate-100 rounded-2xl p-2"
                                    type="date"
                                    placeholder="startDate"
                                    name="startDate"
                                    id="startDate"
                                    value={startDate}
                                    onChange={(e) =>
                                        setStartDate(e.target.value)
                                    }
                                />
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center">
                                <label
                                    htmlFor="endDate"
                                    className="flex-1 md:flex-4/12"
                                >
                                    {" "}
                                    End Date:{" "}
                                </label>
                                <input
                                    className="flex-1 md:flex-8/12 bg-slate-100 rounded-2xl p-2"
                                    type="date"
                                    placeholder="endDate"
                                    name="endDate"
                                    id="endDate"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center">
                                <label
                                    htmlFor="seats"
                                    className="flex-1 md:flex-4/12"
                                >
                                    {" "}
                                    Seats:{" "}
                                </label>
                                <input
                                    className="flex-1 md:flex-8/12 bg-slate-100 rounded-2xl p-2"
                                    type="number"
                                    placeholder="seats"
                                    name="seats"
                                    id="seats"
                                    min={1}
                                    value={seats}
                                    onChange={(e) =>
                                        setSeats(Number(e.target.value))
                                    }
                                />
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center">
                                <label
                                    htmlFor="driver"
                                    className="flex-1 md:flex-4/12"
                                >
                                    {" "}
                                    Driver:{" "}
                                </label>

                                <select
                                    name="driver"
                                    id="driver"
                                    className="flex-1 md:flex-8/12  rounded-2xl p-2 bg-slate-100"
                                    value={selectedDriverEmail}
                                    onChange={(e) =>
                                        setSelectedDriverEmail(e.target.value)
                                    }
                                >
                                    {drivers.map((driver, index) => {
                                        return (
                                            <option
                                                value={driver.email}
                                                key={index}
                                            >
                                                {" "}
                                                {driver.username}{" "}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>

                            <div className="flex flex-col md:flex-row  md:items-center">
                                <label
                                    htmlFor="addPlacesCovered"
                                    className="flex-1 md:flex-4/12"
                                >
                                    {" "}
                                    Places Covered:{" "}
                                </label>

                                <input
                                    className="flex-1 md:flex-6/12 bg-slate-100 rounded-2xl p-2"
                                    type="text"
                                    value={place}
                                    onChange={(e) => setPlace(e.target.value)}
                                    placeholder="Places Covered"
                                    id="addPlacesCovered"
                                    name="addPlacesCovered"
                                />

                                <button
                                    onClick={handlePlaceAddition}
                                    className="flex-1 md:flex-2/12 p-2 mx-2 bg-green-500 rounded-2xl"
                                >
                                    {" "}
                                    Add{" "}
                                </button>
                            </div>
                            <div className="bg-slate-100 flex-1 rounded-2xl shadow-lg">
                                {placesCovered.map((place, index) => {
                                    return (
                                        <div
                                            className="inline-block p-2 px-3 m-1 shadow-md rounded-2xl"
                                            key={index}
                                        >
                                            {place}
                                        </div>
                                    );
                                })}
                            </div>

                            <button
                                type="submit"
                                className="flex-1 p-2 mx-2 bg-green-400 rounded-2xl"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div>
                    <h2 className="bg-slate-800 text-2xl text-slate-50 text-center font-semibold p-4 rounded-2xl">
                        All Package
                    </h2>
                    <div className="w-[100%] flex flex-col gap-4 mt-4">
                        {packages.map((packge, index) => {
                            return (
                                <div
                                    className="flex flex-col gap-4  p-4  bg-slate-300 rounded-2xl shadow-md"
                                    key={index}
                                >
                                    <div className="flex flex-wrap px-5 justify-between flex-col md:flex-row">
                                        <div className="flex flex-col justify-center">
                                            <p>
                                                {packge.pickup} &rarr;{" "}
                                                {packge.destination}
                                            </p>
                                        </div>

                                        <div className="flex flex-col justify-center">
                                            <p>
                                                {packge.startDate} &rarr;{" "}
                                                {packge.endDate}
                                            </p>
                                        </div>

                                        <div className="flex flex-col justify-center">
                                            <p>Cost per Person : </p>
                                            <p>{packge.costPerPerson}</p>
                                        </div>

                                        <div className="flex flex-col justify-center">
                                            <p> Seats : </p>
                                            <p>{packge.seats}</p>
                                        </div>

                                        <div className="flex flex-col justify-center">
                                            <p> Driver : </p>
                                            <p>
                                                {
                                                    drivers.find(
                                                        (driver) =>
                                                            packge.driverEmail ===
                                                            driver.email
                                                    ).username
                                                }
                                            </p>
                                        </div>
                                    </div>

                                    <div className="px-5">
                                        <p> Places Covered : </p>
                                        <div className="flex flex-wrap gap-4">
                                            {packge.placesCovered.map(
                                                (place, index) => {
                                                    return (
                                                        <div className="inline-block px-3 p-2 rounded-2xl border">
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
        </div>
    );
}
