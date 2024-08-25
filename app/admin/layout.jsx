import Sidebar from "@/components/admincomponents/Sidebar";

export default function Layout({children}) {
  return (
    <div className="flex gap-7 bg-red-200">
        <Sidebar />
      {children}
    </div>
  )
}

