import SideBarDashboard from "../components/Atoms/navbar/SidebarDashboard"
import { Modal, ModalDelete } from "../components/Molecules"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {/* <Modal /> */}
            <SideBarDashboard >
                {children}
            </SideBarDashboard>
        </section>
    )
}