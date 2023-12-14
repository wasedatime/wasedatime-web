import ImageWrapper from "@/ui/ImageWrapper";
import Link from "next/link";

export default function Description() {
    return (
        <div className="flex flex-col gap-7 mb-7 items-start">
            <ImageWrapper src="/event-dummy.jpg" className="w-full" />
            <h2>Title</h2>
            <p className="-mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link href='/' className="btn-text no-underline gap-[0.7em] h6">
                <i className="fa-regular fa-circle-user h3"></i>
                Name (email)
            </Link>
        </div>
    )
}