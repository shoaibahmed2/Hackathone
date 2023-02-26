import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/configration";
import { toast, ToastContainer } from "react-toastify";
import { newuserSignup } from "../store/authslice";
import { useRouter } from "next/router";

const Useevent = () => {
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [rememberMe, setRememberMe] = useState<any>(false);
  const [name, setName] = useState<any>("");
  const selector = useSelector;
  const dispatch = useDispatch();
  const router = useRouter();

  const submithandel = async () => {
    try {
      await dispatch(newuserSignup({ email, password }));
      console.log("user created");

      router.push("/signin");
    } catch (error) {
      console.log("error while signup");
    }
  };

  return {
    setEmail,
    setPassword,
    setRememberMe,
    email,
    password,
    rememberMe,
    name,
    setName,
    submithandel,
  };
};

export default Useevent;
