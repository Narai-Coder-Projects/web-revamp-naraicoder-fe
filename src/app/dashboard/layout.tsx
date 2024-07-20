import SideBarDashboard from "@/components/Atoms/navbar/SidebarDashboard"
import ModalError from "@/components/Molecules/Modals/ModalError"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <ModalError />
            <SideBarDashboard >
                {children}
            </SideBarDashboard>
        </section>
    )
}