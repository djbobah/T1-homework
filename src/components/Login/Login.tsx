import { useEffect, useState } from "react";
import { useLoginMutation } from "../../services/dummyjsonApi";
import Button from "../Button/Button";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import Loader from "../../utils/Loader";

const Login = () => {
  const [user, setUser] = useState({ login: "", password: "" });

  const [login, { isLoading, data, error }] = useLoginMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (data?.token) {
      localStorage.setItem("t1", data.token);
      navigate("/");
    }
  }, [data]);

  if (isLoading) {
    return (
      <>
        <Loader />
        <p className="container">LOADING...</p>
      </>
    );
  }

  const handleClickLogin = () => {
    login({
      username: user.login,
      password: user.password,
      expiresInMins: 30,
    });
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [target.name]: target.value }));
  };

  return (
    <section className={styles.wrapper}>
      <h1>Login</h1>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Login"
          name="login"
          className={styles.input}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={styles.input}
          onChange={handleChange}
        />
        {error ? <p className={styles.error}>Something went wrong.</p> : ""}
        <Button title="Login" onClick={handleClickLogin} />
      </div>
    </section>
  );
};

export default Login;
