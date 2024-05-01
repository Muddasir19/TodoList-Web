import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

import Viewtask from "./Viewtask";

const Taskview = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const tasksRef = collection(db, "tasks");

        onSnapshot(tasksRef, (snapshot) => {
          const tasksList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setTasks(tasksList);
          // console.log(tasksList)

          return tasksList;
        });

        //console.log(tasks)
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  return (
    <di className="container">
      <h1 className="fs-1">This is TaskView</h1>

      <div className="container bg-light ">
        {tasks.length <= 0 ? (
          <h1>No Task Pending</h1>
        ) : (
          tasks.map((task) => (
            <Viewtask task={task} key={task.id}/>
          ))
        )}
      </div>
    </di>
  );
};

export default Taskview;
