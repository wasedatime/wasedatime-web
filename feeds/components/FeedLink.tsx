import Link from "next/link";

const FeedLink = ({ name }: { name: string }) => (
  <div>
    <Link href={name}>
      <a>{name}</a>
    </Link>
  </div>
)

export default FeedLink;