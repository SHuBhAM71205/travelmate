import React from "react";

export default function VehicleInfor({ vehicleDetail }) {
    return (
        <div className="mb-3 p-4 flex-3/12 bg-blue-100 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Your Vehicle Info</h3>
            <p className="text-md text-blue-900 font-medium">
                Vehicle Type: {vehicleDetail}
            </p>
        </div>
    );
}
