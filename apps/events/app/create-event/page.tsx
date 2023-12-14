import MyEvents from "@/components/MyEvents";
import PageLayout from "@/hoc/PageLayout";
import Form from "./Form";

export default function MyPage() {
    return (
        <PageLayout title="My Page">
            <h2 className="subtitle mb-4 mt-12">Create Event</h2>
            <Form />
            <MyEvents />
        </PageLayout>
    )
}