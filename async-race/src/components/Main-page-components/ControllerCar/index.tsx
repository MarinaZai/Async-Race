import { ICar } from "../../../interfaces";
import styles from "./styles.module.css";

type ControllerCarPropsType = {
  car: ICar;
  deleteCar: (id: number) => void;
  selectedCar: ICar | null;
  setSelectedCar: (selectedCar: ICar) => void;
  setIsStart: (isStart: boolean) => void;
};

export const ControllerCar: React.FC<ControllerCarPropsType> = ({
  car,
  deleteCar,
  selectedCar,
  setSelectedCar,
  setIsStart,
}) => {
  return (
    <div className={styles.buttons_controller}>
      <div style={{ paddingBottom: "1%", paddingRight: "1%" }}>
        <button
          style={{ marginRight: "1%" }}
          className={styles.button_controller_top}
          onClick={() => {
            setSelectedCar(car);
          }}
        >
          {selectedCar?.id === car.id ? "selected" : "select"}
        </button>
        <button
          className={styles.button_controller_top}
          onClick={() => {
            deleteCar(car.id);
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          style={{ marginRight: "1%" }}
          className={styles.button_controller_bottom}
          onClick={() => setIsStart(true)}
        >
          start
        </button>
        <button 
        className={styles.button_controller_bottom}
        onClick={() => setIsStart(false)}
        >restart</button>
      </div>
    </div>
  );
};
