import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/hooks/firebase-congig.js";
import styles from "@/components/auth/auth.module.css";
// import { useUser } from "@/context/userContext";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const { setUser } = useUser();

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      //   const user = userCredential.user;
      //存入context
      //   setUser(JSON.stringify(user));
      //   localStorage.setItem("token", user.accessToken);
      //   localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={`${styles.signUpPop}`}>
        <h1>Create Account</h1>
        <form action="" onSubmit={signUp}>
          <label htmlFor="">ACCOUNT</label> <br />
          <input
            type="email"
            className="form-control"
            placeholder="enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <label htmlFor="">PASSWORD</label> <br />
          <input
            type="password"
            className="form-control"
            placeholder="enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="text-end mt-3">
            <i className="bi bi-question-circle-fill"></i>忘記密碼
          </div>
          <button
            type="submit"
            className={`btn btn-dark mt-2 ${styles.loginBtn}`}
          >
            submit
          </button>
        </form>
        <p className="mt-3 text-center text-secondary">
          已經是會員了？
          <a className="text-primary" href="">
            登入
          </a>
        </p>
      </div>
    </>
  );
}
