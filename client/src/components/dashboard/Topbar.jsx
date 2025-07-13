
import { Logoutbtn } from "../ui/export"

const Topbar = () => {


    const userName = `Shudhanshu Shrivastava`;
    const userPhoto = `https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740`
    const designation = `Teacher`;

    return (
        <>
            <div className="navbar bg-base-100 shadow-xl ">
                <div className="flex-1 flex items-center gap-4">
                    <div className="w-15 h-15 rounded-full overflow-hidden bg-gray-100">
                        <img className="h-full w-full object-cover" src={userPhoto} alt={userName} />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <h3 className="font-semibold text-lg">{userName}</h3>
                        <span className="text-sm text-[#bababa] font-semibold" >{designation}</span>
                    </div>
                </div>
                <div className="flex-none">
                    {/* <Logoutbtn/> */}
                    <div className="relative inline-flex items-center justify-center gap-4 group">
                        <div className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200" />
                        <a role="button" className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30" title="payment" href="#">Log Out<svg aria-hidden="true" viewBox="0 0 10 10" height={10} width={10} fill="none" className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2">
                            <path d="M0 5h7" className="transition opacity-0 group-hover:opacity-100" />
                            <path d="M1 1l4 4-4 4" className="transition group-hover:translate-x-[3px]" />
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar;