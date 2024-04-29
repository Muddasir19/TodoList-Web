
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
    console.log(result)

  };

  const signUserOut = async() => {
    await signOut(auth);
  };


  return (
    <div>{!user ? <button  onClick={signInWithGoogle}>Sign in With Google</button> : ""}
      
      {/* {
        !user 
          ? (<button  onClick={signInWithGoogle}>Sign in With Google</button>)
          : (<div className="userDetail">
            <p> {user?.displayName} </p>
            <img src={user?.photoURL || ""} height="50" />
            <button onClick={signUserOut}>Logout</button>
            </div>)
      } */}
    </div>
  );
};

export default Login;
