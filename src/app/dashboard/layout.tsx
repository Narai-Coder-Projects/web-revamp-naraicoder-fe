import Alert from "@/components/Atoms/Alert/alert";
import SideBarDashboard from "@/components/Atoms/navbar/SidebarDashboard";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className="relative">
      <Alert iconClose />
      <SideBarDashboard>
        {children}
      </SideBarDashboard>
    </section>
  );
}
