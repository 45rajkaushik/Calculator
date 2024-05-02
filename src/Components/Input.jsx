import styles from "./Input.module.css";
function Input({ str }) {
  return <input type="text" className={styles.Inputbox} value={str} />;
}
export default Input;
