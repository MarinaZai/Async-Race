import React from "react";

export const CreateCar = () => {
  return (
    <div>
      <select id="select">
        <option>one</option>
        <option selected>two</option>
        <option>three</option>
      </select>
      <input type="color" id="head" name="head" value="#e66465"></input>
      <button>CREATE</button>
    </div>
  );
};
