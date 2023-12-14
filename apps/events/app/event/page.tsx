import PageLayout from "@/hoc/PageLayout";
import Description from "./Description";
import Comments from "./Comments";
import Summary from "./Summary";


export default function MyPage() {
    return (
        <PageLayout title="Event">
            <div className="mt-12 flex flex-col lg:flex-row gap-5 lg:items-start max-w-7xl">
                <div className="flex-1">
                    <Description />
                    <Comments />
                </div>
                <Summary />
            </div>
        </PageLayout>
    )
}