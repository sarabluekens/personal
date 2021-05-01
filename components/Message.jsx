
import Link from "next/link";
import styles from "./Message.module.css"

export default function Message ({message}) {
  const {title, letter, mood, slug} = message.fields;

  return (
    <div className="message">
        {console.log(slug)}
        <h1 className={slug}>{title}</h1>
        <p>Message:{letter}</p>
        <p>I feel:{mood}</p>
        <Link href={"/" + slug}>{title}</Link>
   
    </div>
  )
}