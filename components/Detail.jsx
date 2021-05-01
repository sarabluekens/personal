
import Link from "next/link";
import styles from "./Message.module.css"

export default function Detail ({detail}) {
  const {title, letter, mood, slug} = detail.fields;

  return (
    <div className="message">
        {console.log(slug)}
        <h1 className={slug}>{title}</h1>
        <p>Message:{letter}</p>
        <p>I feel:{mood}</p>
        <Link href={"/"}>Back to home</Link>
    </div>
  )
}