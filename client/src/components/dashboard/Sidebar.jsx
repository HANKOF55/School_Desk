import { NavLink } from "react-router-dom";

const Sidebar = () => {

const school_logo = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4gfia-qv-peO0MQxSsny5AW4HXB1eH4DWdg&s`;

const schoolName = "Vedanta Public School";

const staffName = "Sudhanshu Shrivastav";

const sidebarItems = [
    { name: "Home", icon: "ri-home-4-line", route: "/home" },
    { name: "Manage Classes", icon: "ri-book-2-line", route: "/manageClasses"  },
    { name: "Staffs", icon: "ri-team-fill", route: "/staffs" },
    { name: "Students", icon: "ri-user-2-fill", route: "/students" },
    { name: "Fee Collection", icon: "ri-money-rupee-circle-line", route: "/feeCollection" },
    { name: "Salary", icon: "ri-money-rupee-circle-fill", route: "/salary" },
    { name: "Transportation", icon: "ri-bus-line", route: "/transportation" },
    { name: "Routine", icon: "ri-calendar-event-line", route: "/routine" },
    { name: "Settings", icon: "ri-settings-3-line", route: "settings" },
]

    return(
        <>
            <section 
                className = "h-screen w-[60vw] sm:w-[30vw] md:max-w-[220px] absolute md:sticky top-0 bg-base-100 shadow-2xl flex flex-col justify-between text-white"
            >

                {/* Staff Photo and Name */}
                <div className = "flex justify-center items-center px-2 py-2">
                    <div
                        className = "py-2"
                    >
                        {/* <img className = "w-10 rounded-full" src={school_logo} alt="" /> */}
                        {/* <h3 className = "text-sm font-semibold">{staffName}</h3> */}
                         <div className="flex-1 flex items-center gap-4">
                            <img className="w-10 rounded-full " src = {school_logo} alt="" />
                            <a className="text-lg font-semibold">Vedanta public School</a>
                        </div>
                    </div>

                    {/* Burger Menu Icon */}
                    {/* <i class="ri-menu-line text-white text-3xl flex-end"></i> */}
                </div>

                {/* Sidebar Navigation Options */}
                <div >
                    {
                        sidebarItems.map((item, index) => (
                            <NavLink
                                to={item.route}
                                key = {index}
                                className = {
                                    ({isActive}) => (
                                        isActive
                                        ? "bg-slate-900"
                                        : "bg-transparent"
                                    )
                                }
                               
                            >
                                <div
                                     className = "flex items-center gap-2 bg-inherit px-4 py-2 hover:cursor-pointer hover:bg-gray-700 transition duration-200"
                                >
                                    <i className = {item.icon} />
                                    <span className = "text-md">{item.name}</span>
                                </div>

                            </NavLink>
                        ))
                    }
                </div>

                {/* Application Name and version */}
                <div>
                    <h5 className = "text-[#b5b2b1] px-4 py-2">Schol Desk</h5>
                </div>

            </section>
        </>
    )
}

export default Sidebar;