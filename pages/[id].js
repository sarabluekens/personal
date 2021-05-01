// import { useRouter } from "next/router";

// const Message = ({ data }) => {
//   const router = useRouter();
//   if (router.isFallback) {
//     return <p>Het lijkt erop dat de postduif een verkeerde afslag heeft genomen. Probeer het later eens opnieuw...</p>;
//   }
  
// };

// export default Message;


// export const getStaticPaths = async () => {
//    const r = await client.getEntry(`${data.id}`)
//    const data = await r.json();
   
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


const id = () => {
    return ( 
        <div>
            <p>Test</p>
        </div>
     );
}
 
export default id;