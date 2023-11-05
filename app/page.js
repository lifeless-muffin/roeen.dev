const { default: Link } = require("next/link")

export default function Home() {
  return (<div>navigate to <Link href="/about">about me</Link>"  "<a href="/about">more about me</a></div>)
}
