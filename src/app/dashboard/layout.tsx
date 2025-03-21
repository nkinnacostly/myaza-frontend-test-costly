import Navbar from "@/components/navbar";
import DashboardSidebar from "@/components/sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[100vh] w-full ">
      <div className="w-[293px] bg-primary h-full">
        <DashboardSidebar />
      </div>
      <div className="w-[calc(100%-293px)] bg-secondary px-5 py-5 flex gap-5 flex-col h-full ">
        <div className="h-[1o0px]">
          <Navbar />
        </div>
        <div className="h-[calc(100%-1o0px)] overflow-y-scroll ">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
