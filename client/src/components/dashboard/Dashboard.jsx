import {Sidebar, Topbar} from "./export";
import {Logoutbtn, PopUp} from "../ui/export";
import { Outlet } from "react-router-dom";


const Dashboard = () => {


    const school_logo = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4gfia-qv-peO0MQxSsny5AW4HXB1eH4DWdg&s`;
  

    return(
        <>
            <section 
                className = "flex h-screen w-screen relative"
            >

                {/* Side Bar */}
                <Sidebar/>

                {/* layout */}
                <div className = "w-full md:w-auto md:flex-1">
                    
                    {/* Top bar */}
                    <Topbar/>

                    {/* Main Content page */}
                     <div
                    className = "bg-gray-950 h-full"
                     >
                        <Outlet/>

                    </div>

                </div>
               

                    
            </section>   
        </>
    )
}

export default Dashboard;