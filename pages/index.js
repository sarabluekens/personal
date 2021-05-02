import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
  
import Message from '../components/Message'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MoodButtons from '../components/MoodButtons'
import Metadata from '../components/Metadata'
import { useState } from "react";
import { createClient } from 'contentful-management'

import {v4 as uuidv4} from 'uuid';



const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const managementToken = "CFPAT-6PcoIiZR6-99kWbq5xZBHLpNBL64MZyOZjmIS_LI-NE";

// ---------------------------GetEntries------------------------------------

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

// ---------------------------CreateEntry------------------------------------

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
              mood: {
                  'en-US': e.target.lastChild.innerHTML
              },
              letter: {
                  'en-US': e.target.message.value
              },
          }
      }))
      .then((entry) => entry.publish())

      .catch(console.error)
      console.log(e.target.lastChild.innerHTML);

}
//--------------------------MoodList--------------------------------------------

const moods = [
  {
      label : "happy",
      description : " Gelukkig ",
      index : 0
      
  },
  {
      label : "sad",
      description : " Verdrietig ",
      index : 1
  },
  {
      label : "angry",
      description : " Boos ",
      index : 2
  },
  {
      label : "love",
      description : " Verliefd ",
      index : 3
  },
  {
    label : "neutral",
    description : " Neutraal ",
    index : 4
}
]



export default function Home({messages}) {
 const [mood, setMood] = useState("neutral"); 

//----------------------------CSS classes toggle------------------------------------------

 let colorScheme = mood;

 let classHappy = styles.happy;
 let classSad = styles.sad;
 let classNeutral = styles.neutral;
 let classAngry = styles.angry;
 let classLove = styles.love;

  return (
    <>
      <Metadata page="Home"/>

        <main className={colorScheme === "happy" ? classHappy : colorScheme === "sad" ? classSad : colorScheme === "love" ? classLove : colorScheme ==="angry" ? classAngry : classNeutral }>

        <Header/>
       
       <MoodButtons list={moods} value={mood} onRadioChange={(value) => setMood(value)}/>

        {/* FORMbackup */}
       <section>
          <h1> Bericht toevoegen</h1>
          <form onSubmit={submit} className={styles.form}>

            <label htmlFor="title">Titel</label>
                <input id="title" type="text" name="title" />
            
            <label htmlFor="message">Schrijf het uit! </label>
                <textarea id="title" id="message" name="message" /> 
            <input type="submit" value="Send" />

            <label className="hidden" name="kleur">{colorScheme}</label>
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
