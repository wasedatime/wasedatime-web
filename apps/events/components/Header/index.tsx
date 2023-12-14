'use client';
import Search from "./Search";

export interface HeaderProps {
    title?: string;
}

export default function Header(props: HeaderProps) {
    return (
        <div className="flex-center py-4 gap-2 border-b-2 border-accent-9">
            <label htmlFor="Navgation-Bar" className="btn-icon text-primary h3 sm:hidden">
                <i className="fa-solid fa-bars"></i>
            </label>
            <h1 className="flex-1 leading-1">{props.title}</h1>
            <Search />
            <div className="lg:flex-1 flex justify-end text-primary h3">
                <label className="btn-icon -my-[0.5em]"><i className="fa-solid fa-sun"></i></label>
                <button className="btn-normal -my-[0.5em]"><i className="fa-solid fa-language scale-110"></i></button>
            </div>
        </div>
    )
}