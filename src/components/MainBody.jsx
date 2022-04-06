import styles from "./styles.module.css";
import plus from "../assets/plus.svg";
import Item from "./Item";

const MainBody = ({ inputChangeHandler, addNewRoleHandler, items }) => {
  return (
    <main>
      <div className={styles.tableContainer}>
        <div className={styles.head}>
          <div className={styles["no-border"]}></div>
          <div className="">Role</div>
          <div className="">Level</div>
          <div className="">Quantity</div>
          <div className="">Cost/Month</div>
        </div>
        {items.map((item, i) => (
          <Item item={item} i={i} inputChangeHandler={inputChangeHandler} />
        ))}
        <div className={styles.add}>
          <button onClick={addNewRoleHandler}>
            <span>Add new role</span>
            <img src={plus} alt="add" />
          </button>
        </div>
        <div className={styles.foot}>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
          <div className="">Total Cost</div>
          <div className={styles.border}>$3,500</div>
        </div>
      </div>
    </main>
  );
};

export default MainBody;
