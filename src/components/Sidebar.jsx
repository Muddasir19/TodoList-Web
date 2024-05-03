
import { auth} from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth";

const Sidebar = ({onOpen}) => {
    const [user,loading,error] = useAuthState(auth);

    const signUserOut = async() => {
        await signOut(auth);
      };

  return (
    <div className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-1 mt-1 shadow-xl shadow-blue-gray-900/5">
      
      {user ? (<><div  className=" mb-1 d-flex justify-content-center dropdown bg-light border-bottom">
      <img
            src={user?.photoURL || ""}
            alt="User Profile Pic"
            width={66}
            className="rounded-circle me-2"
          />
        <a
          href="#"
          className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          
          <strong>{user?.displayName}</strong>
        </a>
        <ul
          className="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser2"
        >
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <button onClick={signUserOut} className="dropdown-item  " href="#">
              Sign out
            </button>
          </li>
        </ul>
      </div>  </> )  :""}

      
      <div className="d-flex  flex-column " style={{ width: 280 }}>
        {/* <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <svg className="bi me-2" width={40} height={32}>
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">TodoList Web</span>
        </a> */}
        
        <ul className=" m-1 fs-5 nav nav-pills flex-column mb-auto">
        <li>
            <input
              className="form-control mb-1"
              type="search"
              placeholder="Search Task Here"
              aria-label="Search"
            />
          </li>
          <li className="nav-item ">
            <a href="#" className="nav-link active" aria-current="page">
              <svg className="tag bi me-2" width={8} height={8}>
                <use xlinkHref="#home" />
              </svg>
               Home
            </a>
          </li>
          

          <li>
            <button onClick={onOpen} className="tag nav-link link-dark">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#speedometer2" />
              </svg>
              Add Task
            </button>
          </li>
          <li>
            <a href="#" className="tag nav-link link-dark ">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#grid" />
              </svg>
              Favourite
            </a>
          </li>
          <li>
            <a href="#" className="tag nav-link link-dark">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#table" />
              </svg>
              Today
            </a>
          </li>
          <li>
            <a href="#" className="tag nav-link link-dark ">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#grid" />
              </svg>
              Upcoming
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
