import { useReducer, useState } from "react";
import styles from "./styles.module.css";
import plus from "../assets/plus.svg";

const initialState = {
  id: new Date(),
  role: "",
  level: "",
  quantity: 1,
  total: 0,
};

const addItemReducer = () => {};

const VALUES = {
  intern: 10,
  beginner: 30,
  intermediate: 60,
  expert: 80,
  copywriter: 50,
  designer: 60,
  strategist: 70,
  content: 60,
};

const Main = () => {
  const [items, setItems] = useState([]);
  const [itemState, setItemState] = useState(initialState);
  // const [state, dispatch] = useReducer(addItemReducer, initialState);

  const LEVELS = ["intern", "beginner", "intermediate", "expert"];
  const ROLES = ["copywriter", "designer", "strategist", "content"];

  const inputChangeHandler = (e, id) => {
    const { name, value } = e.target;
    // setItemState((prevState) => ({ ...prevState, [name]: value }));

    const updatedItem = items.map((item) =>
      item.id === id
        ? {
            ...item,
            [name]: value,
            total:
              (VALUES[`${item.role}`] &&
                VALUES[`${item.role}`] * item.quantity) ||
              item.quantity,
          }
        : item
    );
    setItems(updatedItem);
  };

  const addNewRoleHandler = () => {
    setItems((prevState) => [
      ...prevState,
      {
        id: new Date(),
        role: "",
        level: "",
        quantity: 1,
        total: 0,
      },
    ]);
  };

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
          <div key={i} className={styles.item}>
            <div className={styles["no-border"]}>{i + 1}</div>
            <div className={styles.selection}>
              <select
                onChange={(e) => inputChangeHandler(e, item.id)}
                name="role"
                id=""
              >
                <option key={i} value="">
                  Select role
                </option>
                {ROLES.map((role, i) => (
                  <option key={i} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.selection}>
              <select
                onChange={(e) => inputChangeHandler(e, item.id)}
                name="level"
                id=""
              >
                <option key={i} value="">
                  Select level
                </option>
                {LEVELS.map((level, i) => (
                  <option key={i} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <input
                type="number"
                name="quantity"
                value={item.quantity}
                min={1}
                placeholder={item.quantity}
                onChange={(e) => inputChangeHandler(e, item.id)}
              />
            </div>
            <div className="">{`$${item.total}`}</div>
          </div>
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

export default Main;
