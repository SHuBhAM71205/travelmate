import React from "react";
import { useAppContext } from "../../context/AppContext";
import DriverNav from "../Driver/DriverNav";

export default function DriverPackageDisplay() {
    const { loggedInUser, packages } = useAppContext();
    return (
        <div className="flex flex-col md:flex-row">
            <DriverNav />
            <div className="flex-1 mt-[20%] md:mt-0 md:ml-[20%] flex flex-col p-3">
                <h2 className="bg-slate-800 text-2xl text-slate-50 text-center font-semibold p-4 rounded-2xl">
                    All Package
                </h2>
                <div className="w-[100%] flex flex-col gap-4 mt-4">
                    {packages.map((packge) => {
                        return (
                            packge.driverEmail === loggedInUser.email && (
                                <div className="flex flex-col gap-4  p-4  bg-slate-300 rounded-2xl shadow-md">
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
                            )
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
