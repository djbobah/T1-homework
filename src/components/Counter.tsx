import plusImg from "../assets/images/plus.svg";
import minusImg from "../assets/images/minus.svg";
import { useState } from "react";
import styles from "./Counter.module.scss";
import ButtonCounter from "./ButtonCounter";
interface ICounter {
  count: number;
}

const Counter = ({ count }: ICounter) => {
  const [counter, setCounter] = useState(count);
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    // if()

    setCounter(() => Number(target.value));
    console.log(counter);
    // const handleClickMinus = () => {
    //   // setCounter((prev) => prev + 1);
    //   console.log(counter);
  };

  const handleClickMinus = () => {
    if (counter > 1) setCounter((prev) => prev - 1);
    else setCounter(1);
  };
  return (
    <div className={styles.counterWratter}>
      <ButtonCounter
        img={minusImg}
        onClick={handleClickMinus}
        type="decrement counter"
      />
      <input type="text" value={counter} onChange={handleChange} />
      <ButtonCounter
        img={plusImg}
        onClick={() => setCounter((prev) => prev + 1)}
        type="increment counter"
      />
    </div>
  );
};

export default Counter;
