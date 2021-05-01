import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
  
import Message from '../components/Message'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Metadata from '../components/Metadata'



const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;


const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function getStaticProps() {
  const data = await client.getEntries({ content_type: 'title'});

  return {
    props: { messages : data.items},
    revalidate: 1,
  }
}

// export async function getServerSideProps(context) {
//   const data = await client.getEntries({ content_type: 'title'});

//   return {
//     props: {
//       messages: data.items
//     },
//   }
// }


// export async function getEntries() {
//   const entries = await client.getEntries({content_type: 'title'})
//   if (entries.items) return entries.items
//   console.log(`Error getting Entries for ${contentType.name}.`)
// }



export default function Home({messages}) {
  console.log(messages);
  return (
    <>
      <Metadata page="Home"/>
      <main className={styles.main}>
        <h1 className={styles.title}> Schrijf het uit! </h1>

        <p className={styles.description}>
        De wereld staat op zijn kop. In deze geïsoleerde tijden was mentale gezondheid nog nooit zo belangrijk! 
        Toch wordt het steeds moeilijker om je gevoelens en frustraties te uitten. Zeker in de online wereld van vandaag.

        Daarom bied ik deze pagina aan in de hoop het iets gemakkelijker te maken deze gevoelens te verwerken.
        Schrijf hier uit wat op je hart ligt, maar je niet kan zeggen.
        </p>

        {/* hier komt het formulier */}
        <form name="test" data-netlify="true" method="POST">
          <p>
            <label>Message </label>
              <textarea id="message" name="message"/> 
          </p>
          <button type="submit">Send</button>

        </form>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            
            <p>Wil je jouw boodschap toch met iemand delen? Klik dan hier</p>
            <h2>Delen &rarr;</h2>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            
            <p>Wil je je boodschap beveiligen? </p>
            <h2>Verbergen &rarr;</h2>
          </a>

        </div>

        <div className={styles.messages}>
          
          {messages.map((message) => {
            return (
              <Message key={message.fields.slug} message={message}  /> 
            )})}
        </div>
       
       
      </main>



</>
  )
}
