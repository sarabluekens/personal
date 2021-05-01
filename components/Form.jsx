import styles from "./AddComment.module.css";

const AddComment = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      content: e.target.content.value,
    };
    e.target.reset();
    onSubmit(data);
  };

  return (
    <section>
          <h1> Bericht toevoegen</h1>
          <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>

            <label>Titel
              <input  type="text" name="title"/>
            </label>

            <label>Message </label>
                <textarea id="message" name="message"/> 

            <input type="submit" value="Send" />
          </form>
        </section>

  );
};

export default AddComment;
