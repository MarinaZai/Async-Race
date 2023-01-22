import React, { ChangeEvent, useState } from "react";
import styles from "./styles.module.css";

type UpdateCarPropsType = {
  updateCar: (name: string, color: string) => void;
};

export const UpdateCar: React.FC<UpdateCarPropsType> = ({ updateCar }) => {
  const [newName, setNewName] = useState("");
  const [newColor, setNewColor] = useState("#707070");
  const updateNewName = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };
  const updateNewColor = (e: ChangeEvent<HTMLInputElement>) => {
    setNewColor(e.target.value);
  };
  return (
    <div className={styles.update_container}>
      <input
        type="text"
        placeholder="update name"
        value={newName}
        onChange={updateNewName}
      />
      <input
        type="color"
        id="head"
        name="head"
        value={newColor}
        onChange={updateNewColor}
      />
      <button
        onClick={() => {
          updateCar(newName, newColor);
          setNewName('')
        }}
      >
        UPDATE
      </button>
    </div>
  );
};
