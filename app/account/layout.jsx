import { TiFlowChildren } from "react-icons/ti";
import SideNavigation from '../_components/SideNavigation'
export default function AccountLayout({children}){

    return (
    <div className="flex flex-row justify-start w-full gap-10">
        <SideNavigation />
        <div className="flex h-full py-1">{children}</div>
    </div>)
}