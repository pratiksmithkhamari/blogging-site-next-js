import Heading from "@/components/Heading";
import ListofBlog from "@/components/ListofBlog";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  return (
    <>
      <Heading />
      <ToastContainer theme="dark" />
      <div className="flex flex-wrap justify-center items-center gap-4 sm:w-3/4  mx-auto">
        <ListofBlog />
      </div>
    </>
  );
}
