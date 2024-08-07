import { Outlet } from "react-router-dom";
import CustomerFeedback from "./CustomerFeedback";
import Header from "./Header";
import Home from "./Home";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DashboardBody = () => {
    return(
        <div className="flex lg:bg-black sm:bg-white xs:bg-white sm:text-dark-navy xs:text-dark-navy ">
            <Sidebar/> 
            <div className="">
            <div className="w-full"> <Header/> </div>
            <div> <Outlet/> </div>
            </div>   
        </div>
    )

}
export default DashboardBody;