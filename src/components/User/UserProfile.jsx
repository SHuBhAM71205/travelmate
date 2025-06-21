import React from "react";
import Card from "../General/Card";
import { useAppContext } from "../../context/AppContext";

export default function UserProfile({ TotalTripsNo, ApprovedTripsNo }) {
    const { loggedInUser, users } = useAppContext();
    const username = users.find((u)=> u.email === loggedInUser.email)?.username;
    return (
        <div className="p-4 w-full mx-auto mb-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 rounded-xl shadow-lg bg-slate-200 col-span-1">
                    <div className="w-20 h-20 rounded-full bg-[url('/UserAvatar.png')] bg-cover bg-center" />
                    <div>
                        <p className="text-lg font-semibold">
                            Username: {username}
                        </p>
                        <p className="text-sm text-gray-600">
                            Email: {loggedInUser.email}
                        </p>
                    </div>
                </div>

                <div className="md:col-span-1 flex flex-col justify-between gap-6">
                    <Card
                        title={"Total Trips"}
                        value={TotalTripsNo}
                        iconStyle={"fa fa-ticket"}
                    />
                    <Card
                        title={"Trips Approved"}
                        value={ApprovedTripsNo}
                        iconStyle={"fa fa-check-square"}
                    />
                </div>
            </div>
        </div>
    );
}
