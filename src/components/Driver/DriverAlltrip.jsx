import React from "react";
import DriverNav from "./DriverNav";
import ApprovedTrip from "./ApprovedTrips";

export default function DriverAlltrip() {
    return (
        <div className="flex flex-col md:flex-row">
            <DriverNav />
            <div className="flex flex-col gap-4 md:ml-[20%] md:mt-0 mt-[20%] flex-1 p-5">
                <h2 className="bg-slate-800 text-2xl text-slate-50 text-center font-semibold p-4 rounded-2xl">
                    All Trips Data
                </h2>
                <ApprovedTrip />
            </div>
        </div>
    );
}
