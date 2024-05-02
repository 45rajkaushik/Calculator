import Createbuttons from "./Createbuttons";
import styles from "./Buttons.module.css";
function Buttons({ buttons, handlebtn }) {
  return (
    <>
      <div className={styles.box}>
        {buttons.map((items) => (
          <Createbuttons
            key={items}
            items={items}
            handlebtn={handlebtn}
          ></Createbuttons>
        ))}
      </div>
    </>
  );
}
export default Buttons;
