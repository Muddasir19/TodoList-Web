import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

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
            <div className="container border p-3 mb-2 task w-auto ">
              
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-2 fs-4 ">
                  <div>
                    {task.Complete ? (
                      <CiCircleCheck className="icon" />
                    ) : (
                      <FaRegCircle className="icon" />
                    )}
                  </div>
                  <p className="text-decoration-underline">{task.Name}</p>
                </div>

                <div className="d-flex gap-2 fs-4  ">
                  <div>
                    {task.Favourite ? (
                      <FaHeart className="icon" />
                    ) : (
                      <CiHeart className="icon" />
                    )}
                  </div>
                  <div>
                    {task.Complete ? <MdDelete className="icon" /> : ""}
                  </div>

                  <FaRegEdit className="icon" />
                </div>
              </div>

              <div className="flex">
                <h5>Description</h5>
                <p className="text-wrap">{task.Description}</p>
                <p className="fst-italic text-decoration-underline">
                  {task.Userid}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </di>
  );
};

export default Taskview;
