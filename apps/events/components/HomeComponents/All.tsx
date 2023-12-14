import RoundedBox from "@/ui/RoundedBox";
import EventItem from "../EventItem";

export default function All() {
    return (
        <>
            <div className="flex-center flex-wrap sm:gap-14 justify-between sm:justify-normal gap-3 mt-12 mb-3">
                <h2 className="subtitle">All</h2>
                <form className="grid grid-cols-4 sm:gap-3 gap-2">
                    <RoundedBox title="Latest" name="event" defaultChecked />
                    <RoundedBox title="Oldest" name="event" />
                    <RoundedBox title="Popular" name="event" />
                    <RoundedBox title="Stared" name="event" />
                </form>
            </div>
            <div className="grid">
                <div className="flex overflow-auto justify-between xl:gap-20 md:gap-6 gap-4">
                    <EventItem title="title"
                        imgURL="/event-dummy.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        favorites={70}
                        isFavorite={false}
                        users={25}
                        date="2023. 10. 25 - 26"
                    />
                    <EventItem title="title 2"
                        imgURL="/event-dummy.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        favorites={70}
                        isFavorite={true}
                        users={25}
                        date="2023. 10. 30"
                    />
                    <EventItem title="title 3"
                        imgURL="/event-dummy.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        favorites={70}
                        isFavorite={false}
                        users={25}
                        date="2023. 10. 25 - 26"
                    />
                    <EventItem title="title 4"
                        imgURL="/event-dummy.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        favorites={70}
                        isFavorite={true}
                        users={25}
                        date="2023. 10. 30"
                    />
                </div>
            </div>
        </>
    )
}