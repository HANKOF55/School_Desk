
const Sidebar = () => {

const school_logo = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4gfia-qv-peO0MQxSsny5AW4HXB1eH4DWdg&s`;

const schoolName = "Vedanta Public School";

const staffName = "Sudhanshu Shrivastav";

const sidebarItems = [
    { name: "Home", icon: "ri-home-4-line" },
    { name: "Manage Classes", icon: "ri-book-2-line" },
    { name: "Staffs", icon: "ri-team-fill" },
    { name: "Students", icon: "ri-user-2-fill" },
    { name: "Fee Collection", icon: "ri-money-rupee-circle-line" },
    { name: "Salary", icon: "ri-money-rupee-circle-fill" },
    { name: "Transportation", icon: "ri-bus-line" },
    { name: "Routine", icon: "ri-calendar-event-line" },
    { name: "Settings", icon: "ri-settings-3-line" }
]

    return(
        <>
            <section 
                className = "h-screen w-[60vw] sm:w-[30vw] md:max-w-[220px] absolute md:sticky top-0 bg-[#001C27] shadow-2xl flex flex-col justify-between text-white"
            >

                {/* Staff Photo and Name */}
                <div className = "flex justify-between items-center px-2 py-2">
                    <div
                        className = "py-2"
                    >
                        {/* <img className = "w-10 rounded-full" src={school_logo} alt="" /> */}
                        <h3 className = "text-sm font-semibold">{staffName}</h3>
                    </div>
                    <i class="ri-menu-line text-white text-3xl flex-end"></i>
                </div>

                {/* Sidebar Navigation Options */}
                <div>
                    {
                        sidebarItems.map((item, index) => (
                            <div
                                key = {index}
                                className = "flex items-center gap-2 px-4 py-2 hover:cursor-pointer hover:bg-[#002F3A] transition duration-200"
                            >
                                <i className = {item.icon} />
                                <span className = "text-md">{item.name}</span>

                            </div>
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