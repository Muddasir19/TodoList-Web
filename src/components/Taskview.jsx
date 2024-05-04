import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

import AddAndUpdateTask from "./AddAndUpdateTask";
import useDisclose from "../hooks/useDisclose";
import Viewtask from "./Viewtask";


const Taskview = () => {
  const {isOpen,onClose,onOpen} = useDisclose();

  

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
   <div className="">
      
     
      <div className="fs-2">Task List Below</div>

      <div className="bg-light">
        {tasks.length <= 0 ? (
          <h1>No Task Pending</h1>
        ) : (
          tasks.map((task) => (

            <Viewtask key={task.id} task={task} />
            
            
          ))
        )}
      </div>

      

    </div>
    
        
  );
};

export default Taskview;
