
import styles from "./Message.module.css"

function Message({ mood, message, title }) {


  return (
    <div className="message">
        <h1 className={title}>{title}</h1>
        <p>Message:{message}</p>
        <p>I feel:{mood}</p>
   
    </div>
  )
}

export default Message