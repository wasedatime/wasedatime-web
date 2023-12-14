import MyEvent from "../MyEvent";

export default function MyEvents() {
    return (
        <>
            <hr className="my-7" />
            <h2 className="subtitle mb-4">My Event</h2>
            <div className="grid">
                <div className="flex overflow-auto xl:gap-8 lg:gap-6 gap-4 max-w-6xl">
                    <MyEvent title="title"
                        className="w-[16.75rem]"
                        imgURL="/event-dummy.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        favorites={70}
                        isFavorite={false}
                        users={25}
                        date="2023. 10. 25 - 26"
                    />
                    <MyEvent title="title"
                        className="w-[16.75rem]"
                        imgURL="/event-dummy.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        favorites={70}
                        isFavorite={false}
                        users={25}
                        date="2023. 10. 25 - 26"
                    />
                    <MyEvent title="title"
                        className="w-[16.75rem]"
                        imgURL="/event-dummy.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        favorites={70}
                        isFavorite={false}
                        users={25}
                        date="2023. 10. 25 - 26"
                    />
                    <MyEvent title="title"
                        className="w-[16.75rem]"
                        imgURL="/event-dummy.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        favorites={70}
                        isFavorite={false}
                        users={25}
                        date="2023. 10. 25 - 26"
                    />
                </div>
            </div>
        </>
    )
}