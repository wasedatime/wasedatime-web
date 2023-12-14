import EventItem from "@/components/EventItem";
import MyEvents from "@/components/MyEvents";
import PageLayout from "@/hoc/PageLayout";
import Link from "next/link";

export default function MyPage() {
    return (
        <PageLayout title="My Page">
            <h2 className="subtitle mb-4 mt-12">My Event</h2>
            <div className="grid max-w-6xl">
                <div className="flex md:gap-6 xl:gap-14 gap-4 overflow-auto">
                    <Link href='/create-event' className="min-w-[15.5rem] py-32 bg-surface-10 btn btn-hover rounded-lg h1 font-thin">
                        <span className="scale-150">+</span>
                    </Link>
                    <EventItem
                        className="w-[16.75rem]"
                        title="1"
                        imgURL="/event-dummy.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        date="2023. 10. 25"
                    />
                    <EventItem
                        className="w-[16.75rem]"
                        title="2"
                        imgURL="/event-dummy.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        date="2023. 10. 25"
                    />
                </div>
            </div>
            <MyEvents />
        </PageLayout>
    )
}