import EventItem from "@/components/EventItem";
import All from "@/components/HomeComponents/All";
import Reccomandation from "@/components/HomeComponents/Reccomandation";
import PageLayout from "@/hoc/PageLayout";
import AccountBox from "@/icons/AccoutBox";
import Link from "next/link";

export default function Home() {
  return (
    <PageLayout title="Event">
      <div className="text-right">
        <Link href='/' className="btn-text">
          <AccountBox /> My Page
        </Link>
      </div>
      <Reccomandation />
      <All />
    </PageLayout>
  )
}
