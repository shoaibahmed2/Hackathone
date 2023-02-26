import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Eventmanager from "@/components/eventmanager";
import Landingpage from "@/components/landingpage";
import Useaddevent from "@/customhooks/useaddevent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Landingpage/>
      {/* <Eventmanager /> */}
    </div>
  );
}
