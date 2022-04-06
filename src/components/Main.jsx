import { useState } from "react";

import MainBody from "./MainBody";

const caseValues = (action) => {
  switch (action) {
    case "intern":
      return 20;
    case "beginner":
      return 40;
    case "intermediate":
      return 60;
    case "expert":
      return 80;
    case "copywriter":
      return 50;
    case "designer":
      return 70;
    case "strategist":
      return 60;
    case "content":
      return 60;
    default:
      return 1;
  }
};

const Main = () => {
  const [items, setItems] = useState([]);

  const inputChangeHandler = (e, id) => {
    const { name, value } = e.target;

    const updatedItem = items.map((item) =>
      item.id === id
        ? {
            ...item,
            [name]: value,
            total:
              name === "quantity"
                ? item.total * value
                : name === "role"
                ? caseValues(value) * caseValues(item.level) * item.quantity
                : caseValues(value) * caseValues(item.role) * item.quantity,
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
        total: 1,
      },
    ]);
  };

  return (
    <MainBody
      items={items}
      addNewRoleHandler={addNewRoleHandler}
      inputChangeHandler={inputChangeHandler}
    />
  );
};

export default Main;
