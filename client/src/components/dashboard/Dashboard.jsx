import {Sidebar} from "./export";

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
                    <div className="navbar bg-[F#4F6F8] shadow-xl text-black ">
                        <div className="flex-1 flex items-center gap-4">
                            <img className="w-15" src = {school_logo} alt="" />
                            <a className="text-lg font-semibold">Vedanta public School</a>
                        </div>
                        <div className="flex-none">
                            <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
                            </button>
                        </div>
                    </div>

                    {/* Main Content page */}
                     <div
                    className = "bg-[F#4F6F8]"
                     >

                    </div>

                </div>
               

                    
            </section>   
        </>
    )
}

export default Dashboard;