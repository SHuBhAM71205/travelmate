import React from "react";

export default function Card({ title, value,iconStyle }) {
    return (
        // <div className='rounded-2xl bg-slate-800 p-4 m-2 text-slate-50 height-[20%] shadow-md hover:scale-105 transition-all duration-200 ease-linear'>
        //   <h3 className='border-gray-300 pb-2' >{title}</h3>
        //   <h5>{value}</h5>
        // </div>
        <div className="bg-slate-300 shadow-lg rounded-lg p-4 flex items-center gap-5 h-[90%] transition hover:shadow-md m-2 ">
            <div className="text-2xl px-2">
                <i className={iconStyle} aria-hidden="true"></i>
            </div>
            <div>
                <h3 className="text-sm text-gray-500 font-medium">
                    {title}
                </h3>
                <p className="text-lg font-bold text-gray-800">{value}</p>
            </div>
        </div>
    );
}
