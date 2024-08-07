
import { FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BsFileBarGraph } from "react-icons/bs";
import { FaRegClipboard } from "react-icons/fa";
import { RiWallet3Line } from "react-icons/ri";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";


const Sidebar = () => {

    const linkActive = ({isActive}) => {
        return isActive ? "lg:text-blue-400 font-bold sm:text-blue-400 xs:text-blue-400" : "lg:text-white sm:text-blue";
    }
    
    return(
        <div className="flex ">
            <div className={`lg:w-20  h-screen  sm:w-12 lg:bg-dark-navy overflow-hidden`}>
               
                    <div className="lg:text-blue-400 sm:text-blue-400 xs:text-blue-400 ml-4 cursor-pointer hover:text-white sm:mt-4 lg:text-5xl sm:text-3xl">
                   <Link to="/"> <RxDashboard /></Link></div>
                    <div className="flex-1 flex flex-col">
                        <BoxWrapper><NavLink to="/home" className={linkActive}><FaHome/></NavLink></BoxWrapper>
                        <BoxWrapper><NavLink to="/chart" className={linkActive}><BsFileBarGraph/></NavLink></BoxWrapper>
                        <BoxWrapper><FaRegClipboard/></BoxWrapper>
                        <BoxWrapper><RiWallet3Line/></BoxWrapper>
                        <BoxWrapper><RiShoppingBag4Fill/></BoxWrapper>
                        </div>

                    <div className="text-white hover:text-blue-400 
                    flex justify-center mt-[21rem] mb-0 cursor-pointer lg:text-xl"><IoMdLogOut />
                    </div>
               
               
            </div>
        </div>
    )
}
export default Sidebar;

function BoxWrapper({children}){
    return(
        <div className="lg:text-white sm:text-blue-400 xs:text-blue-400 hover:text-blue-400 flex 
        justify-center mt-7 cursor-pointer lg:text-xl sm:text-sm">
            {children}
        </div>
    )

}

