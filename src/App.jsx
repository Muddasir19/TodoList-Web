import Login from "./components/Login-page";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Taskview from "./components/Taskview";

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <div className="d-flex">
        <Sidebar />
        <div>
        
        <main className="m-2">
          <h1>Welcome</h1>
          <Taskview/>
        </main>

        </div>
        
      </div>
    </div>
  );
};

export default App;
