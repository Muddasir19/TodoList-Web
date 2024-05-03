import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Taskview from "./components/Taskview";
import { useState } from "react";
import Modal from "./components/Modal";
import AddAndUpdateTask from "./components/AddAndUpdateTask";
import useDisclose from "./hooks/useDisclose";

import { auth } from "./config/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const { isOpen, onClose, onOpen } = useDisclose();
  const [user, loading, error] = useAuthState(auth);

  if(loading){
    <div className="container fs-1 ">Loading</div>
  }

  return (
    <div className="">
      <Navbar />
      <div className="d-flex">
        <Sidebar onOpen={onOpen} />

        <div className=" container min-vw-80 ">
          <main className="m-2">
            <AddAndUpdateTask isOpen={isOpen} onClose={onClose} />

            {user ? (
              <Taskview />
            ) : (
              <div className="container fs-1 ">Login Required</div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
