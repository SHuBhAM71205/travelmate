import React, { useEffect, useState } from "react";
import UserNav from "./UserNav";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function UserTripBooking() {
    const [vehicle, setVehicle] = useState("bus");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [pickup, setPickup] = useState("Ahmedabad");
    const [destination, setDestination] = useState("Mumbai");
    const [cost, setCost] = useState(0);
    const { loggedInUser, trips, setTrips, city, cityDistanceData, costPerKM } =
        useAppContext();

    useEffect(() => {
        if (!pickup || !destination || !vehicle) return;

        const key1 = `${pickup}-${destination}`;
        const key2 = `${destination}-${pickup}`;
        const distance = cityDistanceData[key1] ?? cityDistanceData[key2] ?? 0;

        const rate = costPerKM?.[vehicle] || 0;
        const price = distance * rate;

        setCost(price);
    }, [pickup, destination, vehicle]);

    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!vehicle || !startDate || !endDate || !pickup || !destination) {
            alert("No field should be empty");
            return false;
        }

        if (new Date(startDate) > new Date(endDate)) {
            alert("invalid ending date");
            return false;
        }

        const tripData = {
            vehicle,
            id: Date.now(),
            userEmail: loggedInUser.email,
            driverEmail: null,
            status: "pending",
            startDate,
            endDate,
            pickup,
            destination,
            cost: cost,
        };

        setTrips((prev) => [...prev, tripData]);

        alert("Trip requested Successfully");

        navigate("/user/dashboard");
    };

    return (
        <div className="mx-0 flex gap-0 h-screen">
            <UserNav />

            <div className="md:ml-[20%] mt-[20%] md:mt-0 w-full ">
                <form onSubmit={handleOnSubmit}>
                    <div className="flex flex-col justify-center items-center p-2">
                        <h2 className="text-xl bg-slate-800 text-center p-4 rounded-2xl text-slate-50 w-[80%]">
                            Book A trip
                        </h2>
                        <div className=" w-[80%] my-2 mt-4 bg-slate-200 p-4 rounded-2xl py-2">
                            <label>
                                {" "}
                                <h2>Vehicle:</h2>{" "}
                            </label>
                            <div className="flex flex-wrap gap-4 my-4">
                                <label>
                                    <input
                                        type="radio"
                                        name="vehicle"
                                        value="bus"
                                        checked={vehicle === "bus"}
                                        onChange={() => setVehicle("bus")}
                                        className="hidden"
                                    />
                                    <div
                                        className={`px-4 py-2 rounded-2xl border-none
                                    ${
                                        vehicle === "bus"
                                            ? "bg-slate-700 text-white"
                                            : "bg-slate-200 text-slate-800"
                                    }`}
                                    >
                                        <i
                                            className="fa fa-bus"
                                            aria-hidden="true"
                                        ></i>
                                        {"  "}Bus
                                    </div>
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="vehicle"
                                        value="car"
                                        checked={vehicle === "car"}
                                        onChange={() => setVehicle("car")}
                                        className="hidden"
                                    />
                                    <div
                                        className={`cursor-pointer px-4 py-2 rounded-2xl border-none
                                    ${
                                        vehicle === "car"
                                            ? "bg-slate-700 text-white"
                                            : "bg-slate-200 text-slate-800"
                                    }`}
                                    >
                                        <i
                                            className="fa fa-car"
                                            aria-hidden="true"
                                        ></i>
                                        {"  "}Car
                                    </div>
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="vehicle"
                                        value="van"
                                        checked={vehicle === "van"}
                                        onChange={() => setVehicle("van")}
                                        className="hidden"
                                    />
                                    <div
                                        className={`cursor-pointer px-4 py-2 rounded-2xl border-none 
                                    ${
                                        vehicle === "van"
                                            ? "bg-slate-700 text-white"
                                            : "bg-slate-200 text-slate-800"
                                    }`}
                                    >
                                        <i
                                            className="fa fa-taxi"
                                            aria-hidden="true"
                                        ></i>
                                        {"  "}Van
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-0 md:flex-row w-[80%] my-2">
                            <div className="flex flex-col md:w-1/2 p-5 bg-slate-200 md:rounded-l-2xl md:rounded-r-none md:border-r rounded-2xl">
                                <label
                                    htmlFor="startDate"
                                    className="px-2 py-3 block"
                                >
                                    Start date:
                                </label>
                                <input
                                    type="date"
                                    name="startDate"
                                    id="startDate"
                                    value={startDate}
                                    onChange={(e) =>
                                        setStartDate(e.target.value)
                                    }
                                    className="p-2 py-3 border-0 text-gray-900 block"
                                />
                            </div>

                            <div className="flex flex-col md:w-1/2 p-5 bg-slate-200 md:rounded-r-2xl md:rounded-l-none md:border-l rounded-2xl">
                                <label
                                    htmlFor="endDate"
                                    className="px-2 py-3 block"
                                >
                                    End date:
                                </label>
                                <input
                                    type="date"
                                    name="endDate"
                                    id="endDate"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="p-2 py-3 border-0 text-gray-900 block"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-0 md:flex-row w-[80%] my-2">
                            <div className="flex flex-col md:w-1/2 p-5 bg-slate-200 md:rounded-l-2xl md:rounded-r-none md:border-r rounded-2xl">
                                <label
                                    htmlFor="pickup"
                                    className="px-2 py-3 block"
                                >
                                    Pickup:
                                </label>
                                <select
                                    name="pickup"
                                    id="pickup"
                                    value={pickup}
                                    onChange={(e) => setPickup(e.target.value)}
                                    className="p-2 py-3 border-0 text-gray-900 block"
                                >
                                    {city.map((c, idx) => {
                                        return (
                                            <option value={c} key={idx}>
                                                {c}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>

                            <div className="flex flex-col md:w-1/2 p-5 bg-slate-200 md:rounded-r-2xl md:rounded-l-none md:border-l rounded-2xl">
                                <label
                                    htmlFor="destination"
                                    className="px-2 py-3 block"
                                >
                                    Destination:
                                </label>
                                <select
                                    name="destination"
                                    id="destination"
                                    value={destination}
                                    onChange={(e) =>
                                        setDestination(e.target.value)
                                    }
                                    className="p-2 py-3 border-0 text-gray-900 block"
                                >
                                    {city.map((c, idx) => {
                                        return (
                                            <option value={c} key={idx}>
                                                {c}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>

                        <div className="w-[80%] bg-slate-700 p-4 m-2 rounded-2xl text-slate-50">
                            <p>Cost:</p>
                            {pickup && destination
                                ? pickup === destination
                                    ? "Pickup and Destination same not possible"
                                    : `₹ ${cost}`
                                : "Please Enter Pickup and Destination"}
                        </div>

                        <button
                            type="submit"
                            className="p-3 block bg-gray-700 text-white m-2 !rounded-2xl"
                        >
                            Book a trip!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
