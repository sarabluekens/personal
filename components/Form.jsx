// import styles from "./Form.module.css";

// const Form = ({ onSubmit }) => {
//     const handleSubmit = (e) => {
//         console.log(e.target.title.value);
//         e.preventDefault();
//         const data = {
//           title: e.target.title.value,
//           message: e.target.message.value,
          
//         };
//         e.target.reset();
//         onSubmit(data);
//   };
//   return (
//     <section>
//           <h1> Bericht toevoegen</h1>
//           <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>

//             <label htmlFor="title">Titel</label>
//                 <input  id="title" type="text" name="title" />
            

//             <label htmlFor="message">Message </label>
//                 <textarea id="title" id="message" name="message" /> 
//             <input type="submit" value="Send" />
//           </form>
//         </section>

//   );
// };

// export default Form;

