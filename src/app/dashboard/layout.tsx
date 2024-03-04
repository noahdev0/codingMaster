import Sidebar from "@/components/Sidebar";
import MaxWidthWraper from "@/components/shared/MaxWidthWrapper";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full py-5 ">
        <MaxWidthWraper>{children}</MaxWidthWraper>
      </div>
    </div>
  );
}
