import { useLoginMutation } from "../../services/dummyjsonApi";
import Button from "../Button/Button";
import styles from "./Login.module.scss";

const Login = () => {
  const [login, { isLoading, data, error }] = useLoginMutation();

  const handleClickLogin = (params) => {
    // Теперь вы можете использовать этот хук в вашем компоненте

    // Вызовите мутацию, передавая необходимые данные
    login({ username: "emilys", password: "emilyspass", expiresInMins: 30 });
    console.log(data);
  };
  return (
    <section className={styles.wrapper}>
      <h1>Login</h1>
      <div className={styles.form}>
        <input type="text" placeholder="Login" className={styles.input} />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
        />
        <Button title="Login" onClick={handleClickLogin} />
      </div>
    </section>
  );
};

export default Login;
