
import { auth, provider } from "../config/firebase";
import { signInWithPopup , signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom"

import { useAuthState } from "react-firebase-hooks/auth"


const Login = () => {
  const [user,loading,error] = useAuthState(auth);

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);

    // used to go to homepage after login
    //navigate("/")
    // console.log(result)

  };

  const signUserOut = async() => {
    await signOut(auth);
  };


  return (
    <div className="d-flex " >

       {user ? (<><div  className=" mb-1 d-flex justify-content-center dropdown bg-light">
      <img
            src={user?.photoURL || ""}
            alt="User Profile Pic"
            width={40}
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
      
      
      
      {/* {!user ? <button  className="btn btn-secondary" onClick={signInWithGoogle}>Sign in With Google</button> : 
    <button className="btn btn-danger" onClick={signUserOut}>LogOut</button>}
       */}
  
    </div>
  );
};

export default Login;
