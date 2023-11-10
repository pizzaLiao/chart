import React from "react";
import { auth, provider } from "@/hooks/firebase-congig.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import styles from "@/components/auth/auth.module.css";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

export default function SignWithGoogle() {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  const router = useRouter();
  const loginNotify = () => toast.success("登入成功 ─=≡Σ((( つ•̀ω•́)つ");
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      // 在這裡處理登入後的使用者資訊
      console.log(user);
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      setTimeout(() => {
        router.push("/homepage");
      }, 1500);
    } catch (error) {
      //   const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.error(error);
    }
  };
  return (
    <>
      <Toaster />
      <hr />
      <button
        className={`${styles.googleBtn} btn btn-light mt-3`}
        onClick={signInWithGoogle}
      >
        <img
          className={`${styles.googleLogo}`}
          src="/images/Google_Logo.svg.png"
          alt=""
        />
        使用Google登入
      </button>
    </>
  );
}
