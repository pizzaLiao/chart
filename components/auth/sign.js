import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "@/hooks/firebase-congig.js";
import styles from "@/components/auth/auth.module.css";
import { useUser } from "@/context/userContext";

export default function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [showPsw, setShowPsw] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [checkAcc, setCheckAcc] = useState(false);
  const [checkPsw, setCheckPsw] = useState(false);
  const [checkRePsw, setCheckRePsw] = useState(false);

  const { setUser } = useUser();

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      //存入context
      setUser(JSON.stringify(user));
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      let message = "";
      if (error.code === "auth/wrong-password") {
        // alert("密碼錯誤，請檢查密碼後再試一次");
        message = "密碼錯誤，請檢查密碼後再試一次";
      } else if (error.code === "auth/user-not-found") {
        // alert("此用戶不存在，請檢查電子郵件地址或註冊一個新帳戶");
        message = "此用戶不存在，請檢查電子郵件地址或註冊一個新帳戶";
      } else if (error.code === "auth/too-many-requests") {
        message = "登入次數太多，請稍後再試";
      } else {
        // alert("登入時發生錯誤：" + error.message);
        message = "帳號或密碼錯誤";
      }
      console.log(error.code);
      setError(true);
      setErrorMsg(message);
    }
  };

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
      {isLogin ? (
        <div className={`${styles.signPop}`}>
          <h1>Login</h1>
          <form action="" onSubmit={signIn}>
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
            <div className={`${styles.pswWraper}`}>
              <input
                type={showPsw ? "text" : "password"}
                className="form-control"
                placeholder="enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {showPsw ? (
                <button
                  type="button"
                  className={`${styles.eyeIcon}`}
                  onClick={() => {
                    setShowPsw(false);
                  }}
                >
                  <i className={`bi bi-eye `}></i>
                </button>
              ) : (
                <button
                  type="button"
                  className={`${styles.eyeIcon}`}
                  onClick={() => {
                    setShowPsw(true);
                  }}
                >
                  <i className={`bi bi-eye-slash`}></i>
                </button>
              )}
            </div>
            <div className={`text-end mt-3 ${styles.forgetPsw}`}>
              <i className="bi bi-question-circle-fill me-2"></i>忘記密碼
            </div>
            {error ? (
              <div className={`${styles.notice}`}>
                <i className="bi bi-exclamation-circle-fill me-2"></i>
                {errorMsg}
              </div>
            ) : (
              ""
            )}
            <button
              type="submit"
              className={`btn btn-dark mt-2 ${styles.loginBtn}`}
            >
              submit
            </button>
          </form>
          <p className="mt-3 text-center text-secondary">
            還不是會員嗎？
            <a
              className="text-primary"
              href="#"
              onClick={() => {
                // e.preventDefault();
                setIsLogin(false);
              }}
            >
              註冊帳號
            </a>
          </p>
        </div>
      ) : (
        <div className={`${styles.signPop}`}>
          <h1>Create Account</h1>
          <form action="" onSubmit={signUp}>
            <label htmlFor="">ACCOUNT</label> <br />
            <input
              type="email"
              className="form-control"
              placeholder="請輸入電子郵件"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {checkAcc ? (
              <div className={`${styles.errInline}`}>
                <i class="bi bi-check-circle-fill me-2"></i>可用的電子信箱
              </div>
            ) : (
              ""
            )}
            <br />
            <label htmlFor="">PASSWORD</label> <br />
            <div className={`${styles.pswWraper}`}>
              <input
                type={showPsw ? "text" : "password"}
                className="form-control"
                placeholder="密碼必須至少 6 個字元"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {showPsw ? (
                <button
                  type="button"
                  className={`${styles.eyeIcon}`}
                  onClick={() => {
                    setShowPsw(false);
                  }}
                >
                  <i className={`bi bi-eye `}></i>
                </button>
              ) : (
                <button
                  type="button"
                  className={`${styles.eyeIcon}`}
                  onClick={() => {
                    setShowPsw(true);
                  }}
                >
                  <i className={`bi bi-eye-slash`}></i>
                </button>
              )}
            </div>
            <div className={`${styles.errInline}`}>
              <i class="bi bi-check-circle-fill me-2"></i>符合規定的密碼
            </div>
            <div className={`${styles.pswWraper}`}>
              <input
                type={showPsw ? "text" : "password"}
                className="form-control mt-3"
                placeholder="再次輸入密碼"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {showPsw ? (
                <button
                  type="button"
                  className={`${styles.eyeIcon}`}
                  onClick={() => {
                    setShowPsw(false);
                  }}
                >
                  <i className={`bi bi-eye `}></i>
                </button>
              ) : (
                <button
                  type="button"
                  className={`${styles.eyeIcon}`}
                  onClick={() => {
                    setShowPsw(true);
                  }}
                >
                  <i className={`bi bi-eye-slash`}></i>
                </button>
              )}
            </div>
            <div className={`${styles.errInline}`}>
              <i class="bi bi-check-circle-fill me-2"></i>前後密碼一致
            </div>
            <button
              type="submit"
              className={`btn btn-dark mt-5 ${styles.loginBtn}`}
            >
              submit
            </button>
          </form>
          <p className="mt-3 text-center text-secondary">
            已經是會員了？
            <a
              className="text-primary"
              href="#"
              onClick={() => {
                // e.preventDefault();
                setIsLogin(true); // 切換到登入模式
              }}
            >
              登入
            </a>
          </p>
        </div>
      )}
    </>
  );
}
