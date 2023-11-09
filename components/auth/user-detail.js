import React, { useEffect, useState } from "react";
import { auth } from "@/hooks/firebase-congig.js";
import { onAuthStateChanged, signOut } from "@firebase/auth";

export default function UserDetail() {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    // 清理函數（cleanup function），可以確保在組件不再使用時停止不必要的監聽操作，並釋放資源。
    return () => {
      listen();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        console.log(`sign out successful`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {authUser ? (
        <>
          <p>{`Signed in as ${authUser.email}`}</p>
          <button className="btn btn-dark" onClick={handleSignOut}>
            sign out
          </button>
        </>
      ) : (
        <p>Signed out</p>
      )}
    </>
  );
}
