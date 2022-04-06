import React from "react";
import { LEVELS, ROLES } from "./constant";
import styles from "./styles.module.css";

const Item = ({ item, i, inputChangeHandler }) => {
  return (
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
          onChange={(e) => inputChangeHandler(e, item.id)}
        />
      </div>
      <div className="">{`$${item.total}`}</div>
    </div>
  );
};

export default Item;
