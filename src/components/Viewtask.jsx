import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import useDisclose from "../hooks/useDisclose";
import AddAndUpdateTask from "./AddAndUpdateTask";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useState } from "react";

const Viewtask = ({ task }) => {
    const {isOpen,onClose,onOpen} = useDisclose();
    

    const deleteTask = async (id) => {
        try {    
          deleteDoc(doc(db , "tasks", id))
        } catch (error) {
          console.log(error)
        }
      }

      

      
  return (
    <>
    <AddAndUpdateTask isUpdate isOpen={isOpen} onClose={onClose} tasks={task} />
    
   
      <div className="border p-3 mb-2 task">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-2 fs-4 ">
            <div>
              {task.Complete ? (
                <CiCircleCheck  className="icon" />
              ) : (
                <FaRegCircle on className="icon" />
              )}
            </div>
            <p className="text-decoration-underline">{task.Name}</p>
            
          </div>

          <div className="d-flex gap-2 fs-4  ">
            <div>
              {task.Favourite ? (
                <FaHeart  
                className="icon" />
              ) : (
                <CiHeart  
                className="icon" />
              )}
            </div>
            <div>
              {
               task.Complete ? (
                <MdDelete onClick={()=>deleteTask(task.id)} className="icon" />
              
               ) : ("" )
              }
            </div>

            <FaRegEdit onClick={onOpen} className="icon" />
          </div>
        </div>

        <div className="flex">
          <h5>Description</h5>
          <p className="text-wrap">{task.Description}</p>
          <p className="fst-italic text-decoration-underline">{task.Userid}</p>
        </div>
      </div>
    </>
  );
};

export default Viewtask;
