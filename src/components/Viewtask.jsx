import { CiCircleCheck } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import useDisclose from "../hooks/useDisclose";
import AddAndUpdateTask from "./AddAndUpdateTask";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";

const Viewtask = ({ task }) => {
    const {isOpen,onClose,onOpen} = useDisclose();
    

    const deleteTask = async (id) => {
        try {    
          deleteDoc(doc(db , "tasks", id))
        } catch (error) {
          console.log(error)
        }
      }

    //   const updateTask = async(task,id) => {
    //     try {
    //         const taskRef = doc(db,"tasks",id)
    //         await updateDoc(taskRef,task)
    //         onClose(); 
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const updateFav = async(value,id) => {
      try {
        const taskRef = doc(db,"tasks",id)
        await updateDoc(taskRef,{Favourite:value});
        
      } catch (error) {
        console.log(error)
      }
    }
    const updateCom = async(value,id) => {
      try {
        const taskRef = doc(db,"tasks",id)
        await updateDoc(taskRef,{Complete:value});
        
      } catch (error) {
        console.log(error)
      }
    }


      

      
  return (
    <>
    <AddAndUpdateTask isUpdate isOpen={isOpen} onClose={onClose} tasks={task} />
    
   
      <div className="border p-2 mb-2 task">
        <div className="d-flex justify-content-between ms-3">
          <div className="d-flex gap-2 fs-4  ">
            <div>
              {task.Complete ? (
                <CiCircleCheck 
                onClick={() => updateCom(!task.Complete,task.id) } className="icon" />
              ) : (
                <FaRegCircle 
                onClick={() => updateCom(!task.Complete,task.id) }on className="icon" />
              )}
            </div>
            <p className="text-decoration-underline ">{task.Name}</p>
            
          </div>

          <div className="d-flex gap-2 fs-4">
            <div className="">
              {task.Favourite ? (
                <MdOutlineStarOutline onClick={() => updateFav(!task.Favourite,task.id) } className="icon"/>
              ) : (
                <MdOutlineStarPurple500 onClick={() => updateFav(!task.Favourite,task.id) } className="icon" />
              )}
            </div>
            <div className="">
              {
               task.Complete ? (
                <MdDelete onClick={()=>deleteTask(task.id)} className="icon" />
              
               ) : ("" )
              }
            </div>

            <div className="">
            <FaRegEdit onClick={onOpen} className="icon" />
            </div>

            
          </div>
        </div>

        <div className="flex  ms-3">
          <h5>Description</h5>
          <p className="text-wrap">{task.Description}</p>
          <p className="fst-italic text-decoration-underline">{task.Userid}</p>
        </div>
      </div>
    </>
  );
};

export default Viewtask;
