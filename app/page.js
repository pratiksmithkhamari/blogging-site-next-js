import Heading from "@/components/Heading";
import ListofBlog from "@/components/ListofBlog";


export default function Home() {
  return (
    <>
    
    <Heading />
    <div className="flex flex-wrap justify-center items-center gap-4 sm:w-3/4  mx-auto">
      <ListofBlog />
    </div>
    </>
  );
}
