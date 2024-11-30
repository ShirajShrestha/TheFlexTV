import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
