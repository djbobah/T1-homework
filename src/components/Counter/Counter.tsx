import plusImg from "../../assets/images/plus.svg";
import minusImg from "../../assets/images/minus.svg";
import { useState } from "react";
import styles from "./Counter.module.scss";
// import ButtonCounter from "../../ButtonCounter";
import ButtonAction from "../ButtonAction/ButtonAction";
interface ICounter {
  count: number;
  stylesName?: string;
  big?: boolean;
  // onChange: (event: React.MouseEvent<HTMLButtonElement>) => string;
  setChangeSide: (str: string) => void;
}

const Counter = ({
  count,
  stylesName,
  big = false,
  setChangeSide,
}: ICounter) => {
  // const [counter, setCounter] = useState(count);
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    console.log("в задании было сказано не менять вручную");
  };

  // const handleClickMinus = () => {
  //   if (counter > 0) setCounter((prev) => prev - 1);
  //   else setCounter(0);
  // };
  return (
    <div className={styles.counterWrapper + " " + stylesName}>
      <ButtonAction
        img={minusImg}
        // onClick={handleClickMinus}
        onClick={() => setChangeSide("-")}
        type="decrement counter"
        big={big}
      />
      <input
        type="text"
        value={count}
        onChange={handleChange}
        className={
          big === true ? styles.count + " " + styles.big : styles.count
        }
      />
      <ButtonAction
        img={plusImg}
        // onClick={() => setCounter((prev) => prev + 1)}
        onClick={() => setChangeSide("+")}
        type="increment counter"
        big={big}
      />
    </div>
  );
};

export default Counter;
