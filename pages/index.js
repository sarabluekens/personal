import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
  
import Message from '../components/Message'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Metadata from '../components/Metadata'
import { useState } from "react";
import { createClient } from 'contentful-management'

import {v4 as uuidv4} from 'uuid';


const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const managementToken = "CFPAT-6PcoIiZR6-99kWbq5xZBHLpNBL64MZyOZjmIS_LI-NE";


export async function getStaticProps() {
  const client = require('contentful').createClient({
    space: space,
    accessToken: accessToken,
    managementToken: managementToken
  })
  const data = await client.getEntries({ content_type: 'title'});

  return {
    props: { messages : data.items},
    revalidate: 1,
  }
}

// ---------------------------------------------------------------

const submit = (e) => {
  let myuuid = uuidv4();
  const client = createClient({
    accessToken: 'CFPAT-6PcoIiZR6-99kWbq5xZBHLpNBL64MZyOZjmIS_LI-NE'
  })
  e.preventDefault();
  client.getSpace('bmr0ht5lqw49')
      .then((space) => space.getEnvironment('master'))
      .then((environment) => environment.createEntry('title', {
          fields: {
              title: {
                  'en-US': e.target.title.value
              },
              slug: {
                  'en-US': myuuid
              },
              letter: {
                  'en-US': e.target.message.value
              },
          }
      }))
      .then((entry) => entry.publish())

      .catch(console.error)

}
//----------------------------------------------------------------------

export default function Home({messages}) {
  // console.log(data);
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
       

        {/* FORMbackup */}
       <section>
          <h1> Bericht toevoegen</h1>
          <form onSubmit={submit} className={styles.form}>

            <label htmlFor="title">Titel</label>
                <input id="title" type="text" name="title" />
            
            <label htmlFor="message">Schrijf het uit! </label>
                <textarea id="title" id="message" name="message" /> 
            <input type="submit" value="Send" />
          </form>
        </section>

        {/* FORMbackup */}

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
              <Message key={message.fields.slug} message={message} link={"/" + message.fields.slug} /> 
            )})}
        </div>
       
       
      </main>



</>
  )
}
