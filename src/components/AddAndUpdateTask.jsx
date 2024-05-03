import React from "react";
import Modal from "./Modal";
import { ErrorMessage,Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

// import * as Yup from "yup";

// const contactsSchemaValidation = Yup.object().shape({
//     Name:Yup.string().required("Name is Required"),
//     Description:Yup.string().required("Description is Required"),

// })

const AddAndUpdateTask = ({ isOpen, onClose , isUpdate, tasks  }) => {

    
    const addTask = async(task) => {
        try {
            const taskRef = collection(db,"tasks")
            await addDoc(taskRef,task)
            onClose();
        } catch (error) {
            console.log(error)
        }

    }
    const updateTask = async(task,id) => {
        
      try {
          const taskRef = doc(db,"tasks",id)
          await updateDoc(taskRef,task)
          onClose();


          
      } catch (error) {
          console.log(error)
      }

  }
  return (
    <div>
      
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
        // validationSchema={contactsSchemaValidation}

        


        initialValues={
          isUpdate
          ? { Name : tasks.Name , Description : tasks.Description, }: 
          { Name:"", Description:"", }
      }
        onSubmit={(values)=>{
            isUpdate 
            ? updateTask(values,tasks.id) 
            : addTask(values);

        }}
        >
          <Form className="container bg-info ">
            
            {isUpdate? <div className="fs-3 text-danger fw-bolder ">Edit Task</div>  :<div className="fs-3">Add New Task</div>}
            <div className="d-flex flex-column mb-2">
            <label htmlFor="Name">Name</label>
              <Field name="Name" placeholder="Enter Task Name or Heading" />
              <div>
                <ErrorMessage name="Name"/>
              </div>
            </div>
            <div className="d-flex flex-column mb-2">
            <label htmlFor="Description">Description</label>
              <Field name="Description" placeholder="Enter Task Description" />
              <div>
                <ErrorMessage name="Description"/>
              </div>
            </div>
            <div className="d-flex justify-content-end mb-2">
                <button onClick={onClose} className="btn btn-danger me-1">Cancel</button>
              <button className="btn btn-success"  type="submit">{isUpdate ? "Update" : "Add"} Task</button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateTask;
