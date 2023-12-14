import Link from "next/link";

export default function Summary() {
    return (
        <div className="bg-ground lg:w-80 shadow-4 p-5 sticky top-0">
            <small>One-Time</small>
            <h3 className="mt-2 mb-1">Event Name</h3>
            <h6>2023.11.30 &nbsp; 14:00</h6>
            <div className="my-6 grid gap-4 items-start text-base">
                <div className="flex-center gap-3">
                    <i className="fa-solid h5 fa-location-dot"></i>
                    Location
                </div>
                <div className="flex-center gap-4">
                    <span className="h4 font-normal">¥</span> Fee
                </div>
                <Link href='/' className="btn-text mr-auto no-underline gap-[0.5em]">
                    <i className="fa-regular fa-circle-user h4"></i>
                    Name (email)
                </Link>
            </div>
            <div className="grid gap-2">
                <button className="btn-primary gap-[0.25em] w-full h6 flex-col">
                    Apply
                    <small className="text-xs text-[#FFA1B0]">~2023.11.29</small>
                </button>
                <button className="btn-primary py-[1.125em] bg-transparent text-black border border-primary h-full">
                Chat
                </button>
            </div>
        </div>
    )
}