
const Logoutbtn = () => {


    return(
        <>

            {/* <button className="text-gray-300 flex items-center gap-4 hover:cursor-pointer hover:scale-101 hover:bg-gray-00 active:translate-y-0.5 px-4 py-1 rounded-lg mr-5 "> */}
            <button className = "btn btn-outline">    
                <span className="text-lg font-semibold ">
                    Log Out
                </span>
                
                <div className = "text-3xl">
                    <i class="ri-logout-circle-r-line"></i>
                </div>

            </button>
        </>
    )
}

export default Logoutbtn;