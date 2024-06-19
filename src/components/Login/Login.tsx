import { useEffect, useState } from "react";
import { useAuthQuery, useLoginMutation } from "../../services/dummyjsonApi";
import Button from "../Button/Button";
import styles from "./Login.module.scss";
import { Navigate, useNavigate } from "react-router-dom";
// im

const Login = () => {
  const [user, setUser] = useState({ login: "", password: "" });

  const [login, { isLoading, data, error }] = useLoginMutation();

  const navigate = useNavigate();
  useEffect(() => {
    console.log("set token");

    if (data?.token) {
      localStorage.setItem("t1", data.token);
      console.log("login");
      navigate("/");
    }
  }, [data]);

  const handleClickLogin = () => {
    login({
      username: user.login,
      password: user.password,
      expiresInMins: 1,
    });
    // navigate("/");
    // return <Navigate to="/" />;
  };

  // const handleClickLogin = () => {
  //   const { isLoading, data, error } = useLoginQuery({
  //     username: user.login,
  //     password: user.password,
  //     expiresInMins: 30,
  //   });

  //   // login({ username: user.login, password: user.password, expiresInMins: 30 });
  //   console.log(data);
  //   localStorage.setItem("t1", data.token);

  //   // const { data: authUser, isLoading, error } = useAuthQuery(data.token);

  //   // console.log("authUser", authUser);
  // };

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
        {error ? <p className={styles.error}>{error.data.message}</p> : ""}
        <Button title="Login" onClick={handleClickLogin} />
      </div>
    </section>
  );
};

export default Login;
