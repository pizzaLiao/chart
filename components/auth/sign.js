import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "@/hooks/firebase-congig.js";
import styles from "@/components/auth/auth.module.css";
import { useUser } from "@/context/userContext";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

export default function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [showPsw, setShowPsw] = useState(false);
  const [showRePsw, setShowRePsw] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [checkAcc, setCheckAcc] = useState(false);
  const [checkPsw, setCheckPsw] = useState(false);
  const [checkRePsw, setCheckRePsw] = useState(false);

  const { setUser } = useUser();
  //   const navigate = useNavigate();
  const router = useRouter();

  const registerNotify = () =>
    toast.success("註冊成功─=≡Σ((( つ•̀ω•́)つ 正在為您導向首頁");
  const loginNotify = () => toast.success("登入成功 ─=≡Σ((( つ•̀ω•́)つ");

  const clearAll = () => {
    setEmail("");
    setPassword("");
    setRePassword("");
    setCheckAcc(false);
    setCheckPsw(false);
    setCheckRePsw(false);
    setShowPsw(false);
    setShowRePsw(false);
  };

  const isValidPsw = (password) => {
    const pswRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return pswRegex.test(password);
  };

  const isValidEmail = (email) => {
    // 驗證電子郵件格式
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleRePswChange = (e) => {
    const newRePassword = e.target.value;
    setRePassword(newRePassword);
    setCheckRePsw(newRePassword === password);
  };

  const handlePswChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setCheckPsw(isValidPsw(newPassword));
    setCheckRePsw(rePassword === newPassword);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setCheckAcc(isValidEmail(newEmail));
  };

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
      // 登入成功後導航到首頁
      //   navigate("/homepage");
      loginNotify();
      setTimeout(() => {
        router.push("/homepage");
      }, 1500);
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
      registerNotify();

      setTimeout(() => {
        router.push("/homepage");
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLogin ? (
        <div className={`${styles.signPop}`}>
          <Toaster />
          <h1 className={`${styles.title}`}>登入</h1>
          <form action="" onSubmit={signIn}>
            <label htmlFor="">帳號</label> <br />
            <input
              type="email"
              className="form-control"
              placeholder="請輸入你的電子郵件"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <label htmlFor="">密碼</label> <br />
            <div className={`${styles.pswWraper}`}>
              <input
                type={showPsw ? "text" : "password"}
                className="form-control"
                placeholder="請輸入"
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
              登入
            </button>
          </form>
          <p className="mt-3 text-center text-secondary">
            還不是會員嗎？
            <a
              className="text-primary"
              href="#"
              onClick={() => {
                setIsLogin(false);
                clearAll();
              }}
            >
              註冊帳號
            </a>
          </p>
        </div>
      ) : (
        <div className={`${styles.signPop}`}>
          <Toaster />
          <h1 className={`${styles.title}`}>註冊</h1>
          <form action="" onSubmit={signUp}>
            <label htmlFor="">帳號</label> <br />
            <input
              type="email"
              className="form-control"
              placeholder="請輸入電子郵件"
              value={email}
              onChange={handleEmailChange}
            />
            {checkAcc ? (
              <div className={`${styles.sucInline}`}>
                <i class="bi bi-emoji-smile-fill me-2"></i>可用的電子信箱
              </div>
            ) : (
              <div className={`${styles.defInline}`}>
                <i class="bi bi-emoji-frown me-2"></i>請輸入可用的信箱
              </div>
            )}
            <br />
            <label htmlFor="">密碼</label> <br />
            <div className={`${styles.pswWraper}`}>
              <input
                type={showPsw ? "text" : "password"}
                className="form-control"
                placeholder="請輸入"
                value={password}
                onChange={handlePswChange}
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
            {checkPsw ? (
              <div className={`${styles.sucInline}`}>
                <i class="bi bi-emoji-smile-fill me-2"></i>符合規定的密碼
              </div>
            ) : (
              <div className={`${styles.defInline}`}>
                <i class="bi bi-emoji-frown me-2"></i>
                必須大於8個字元，且包含至少一個數字和英文
              </div>
            )}
            <div className={`${styles.pswWraper}`}>
              <input
                type={showRePsw ? "text" : "password"}
                className="form-control mt-3"
                placeholder="再次輸入密碼"
                value={rePassword}
                onChange={handleRePswChange}
              />
              {showRePsw ? (
                <button
                  type="button"
                  className={`${styles.eyeIcon}`}
                  onClick={() => {
                    setShowRePsw(false);
                  }}
                >
                  <i className={`bi bi-eye `}></i>
                </button>
              ) : (
                <button
                  type="button"
                  className={`${styles.eyeIcon}`}
                  onClick={() => {
                    setShowRePsw(true);
                  }}
                >
                  <i className={`bi bi-eye-slash`}></i>
                </button>
              )}
            </div>
            {checkRePsw ? (
              <div className={`${styles.sucInline}`}>
                <i class="bi bi-emoji-smile-fill me-2"></i>前後密碼一致
              </div>
            ) : (
              <div className={`${styles.defInline}`}>
                <i class="bi bi-emoji-frown me-2"></i>前後密碼不一致
              </div>
            )}
            <button
              type="submit"
              className={`btn btn-dark mt-5 ${styles.loginBtn} ${
                checkAcc && checkPsw && checkRePsw ? "" : "disabled"
              }`}
            >
              註冊
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
                clearAll();
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
