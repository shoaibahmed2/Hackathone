// import { useState } from "react";
import { useState } from "react";
import signin from "@/pages/signin";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/configration";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { newSignin } from "../store/authslice";

const UseSiignin = () => {
  const [newemail, setemail] = useState("");
  const [newpassword, setpassword] = useState("");
  const [isChecked, setisChecked] = useState();
  const dispatch = useDispatch();
  const router = useRouter();

  const signhandel = () => {
    try {
      dispatch(newSignin({ auth, newemail, newpassword }));
      // signInWithEmailAndPassword(auth, newemail, newpassword);
      router.push("/");
    } catch (error) {
      console.log("login error");
    }
  };
  const checkhandel = (event: any) => {
    const isChecked = event.target.checked;
    setisChecked(isChecked);
  };
  return {
    newemail,
    checkhandel,
    setemail,
    newpassword,
    setpassword,
    signhandel,
  };
};

export default UseSiignin;
