import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { db } from "../firebase/configration";

const UseEventApp = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [Creator, setCreator] = useState("");
  const [description, setDescription] = useState("");
  const [Events, setEvents] = useState([]);

  type Eventtype = {
    usertitle: String;
    userdate: String;
    usertime: String;
    userlocation: String;
    usercreator: String;
    userdescription: String;
  };

  const submitEventHandler = async () => {
    // let newEvents: Eventtype = {
    //   usertitle: title,
    //   userdate: date,
    //   usertime: time,
    //   userlocation: location,
    //   usercreator: Creator,
    //   userdescription: description,
    // };

    console.log(title, date,time);

    // setEvents([...Events, newEvents]);
    try {
      const docRef = await addDoc(collection(db, "events"), {
        usertitle: title,
        userdate: date,
        usertime: time,
        userlocation: location,
        usercreator: Creator,
        userdescription: description,
      });
    } catch (error) {}
  };

  // useEffect(() => {
  //     console.log(allEvents);
  // }, [allEvents]);

  return {
    setTitle,
    setDate,
    setTime,
    setLocation,
    setCreator,
    setDescription,
    setEvents,
    submitEventHandler,
    title,
    date,
    time,
    location,
    Creator,
    description,
  };
};

export default UseEventApp;
