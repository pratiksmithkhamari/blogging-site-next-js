import Sidebar from "@/components/admincomponents/Sidebar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
  return (
    <div className="flex gap-7 ">
      <ToastContainer theme="dark" />
      <Sidebar />
      {children}
    </div>
  );
}
