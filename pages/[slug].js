// ------------------------------------------------------------

import Detail from '../components/Detail';

// import Metadata from '../components/Metadata'
// import { useRouter } from "next/router";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;


const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export const getStaticPaths = async () => {
    const data = await client.getEntries({ content_type: 'title'})

    const paths = data.items.map(item => {
        return {
            params : {slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: true,
    }
 }
 
 export async function getStaticProps({params}) {
    //  geeft een array terug van 1 element!
    const {items} = await client.getEntries({ 
        content_type: 'title', 
        'fields.slug': params.slug
    })

    return {
        // zet array om naar object
        props: { detail: items[0]},
        revalidate: 1,
    }
  }

export default function readMessage ({detail}) {
    if (!detail)  return <div>Working on it!...</div>

    return (
        <Detail  detail={detail}/>

    )
}
// const Message = ({ data }) => {
//   const router = useRouter();
//   if (router.isFallback) {
//     return <p>Loading..</p>;
//   }


//   return ( 
//     <>
//     <Metadata page="Id"/>
//     <div>
//         <p>test</p>
//         {console.log(data)}
//     </div>
//     </>
//  );
// }


// export default Message;


// TOTO HEIR HAD IK AL STAAT, ERONDER WAS AL IN COMMENTAAR
// ------------------------------------------------------------

//      console.log(data.sys)
   
//      // logs the field with ID title
//      console.log(data.fields.title)

//      return {
//         paths: data.map((message) => ({
//           params: {
//             id: message.id,
//           },
//         })),
//         fallback: true,
//       };
// };
