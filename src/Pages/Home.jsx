import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col ">
            <div className="relative h-[60vh] flex items-center justify-center text-white bg-[url('/t1.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative text-center px-4">
                    <h1 className="text-4xl font-bold mb-4">
                        Explore the World with Ease
                    </h1>
                    <p className="mb-6">
                        Plan your next trip with trusted and affordable travel
                        services.
                    </p>
                    <button
                        onClick={() => navigate("/login")}
                        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded hover:shadow-lg transition-all ease-in duration-200 hover:rounded-2xl cursor-pointer"
                    >
                        Get Started
                    </button>
                </div>
            </div>

            <div className="py-16 bg-gray-100">
                <div className="max-w-5xl mx-auto text-center px-4">
                    <h2 className="text-2xl font-semibold mb-10">
                        Why Choose Us?
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition-all ease-in duration-200">
                            <img
                                src="/t2.jpg"
                                alt="Easy Booking"
                                className="h-40 w-full object-cover rounded mb-4"
                            />
                            <h3 className="text-lg font-medium mb-2">
                                Easy Booking
                            </h3>
                            <p className="text-sm text-gray-600">
                                Book trips easily with just a few clicks.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition-all ease-in duration-200">
                            <img
                                src="/t3.jpg"
                                alt="Trusted Drivers"
                                className="h-40 w-full object-cover rounded mb-4"
                            />
                            <h3 className="text-lg font-medium mb-2">
                                Trusted Drivers
                            </h3>
                            <p className="text-sm text-gray-600">
                                Verified and experienced drivers for safe
                                travel.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition-all ease-in duration-200">
                            <img
                                src="/t4.jpg"
                                alt="Wide Destinations"
                                className="h-40 w-full object-cover rounded mb-4"
                            />
                            <h3 className="text-lg font-medium mb-2">
                                Wide Destinations
                            </h3>
                            <p className="text-sm text-gray-600">
                                Travel to a variety of popular destinations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-blue-950 text-white text-center py-4">
                <p className="text-sm">
                    &copy; 2025 TravelEase. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
