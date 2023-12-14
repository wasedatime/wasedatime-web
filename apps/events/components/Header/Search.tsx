'use client';

import Magnifier from "@/icons/Magnifier";
import { useState } from "react";

// import { useSearchParams } from "next/navigation";

export default function Search() {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <div className={`bg-ground z-2 lg:static absolute w-full lg:w-[initial] flex-2 left-0 top-0 transition-all lg:opacity-100 lg:visible ${visible ? "" : "opacity-0 invisible"} h-full`}>
                <label className={`bg-ground relative rounded-none shadow-2 gap-2 lg:rounded-full pl-6 pr-3 flex-2 flex-center lg:top-0 ${visible ? "top-0" : "-top-20"}`}>
                    <input onBlur={() => setVisible(false)} className="outline-none flex-1 max-w-full pr-6 lg:pr-0 md:min-w-[29rem] py-4 leading-1" placeholder="Seach job oppotunities and seminars. Try “CyberAgent” or “2022卒”..." />
                    <Magnifier className="h-7 lg:block hidden" />
                </label>
                <button onClick={() => setVisible(false)} className="btn-icon absolute lg:hidden right-1 h3 top-[0.2em]"><i className="fa-solid fa-xmark"></i></button>
            </div>
            <button className="btn-icon h3 ml-auto text-primary lg:hidden" onClick={() => setVisible(true)}>
                <Magnifier />
            </button>
        </>
    )
}