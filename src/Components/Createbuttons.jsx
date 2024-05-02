import styles from "./Createbuttons.module.css";
function Createbuttons({ items, handlebtn }) {
  return (
    <>
      <button
        type="button"
        className={`btn btn-secondary ${styles.button}`}
        onClick={handlebtn}
      >
        {items}
      </button>
    </>
  );
}
export default Createbuttons;
