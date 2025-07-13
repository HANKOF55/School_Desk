import { AddStaffs, AddDesignation } from "./export"

const Staffs = () => {

    return (
        <>
            <section className="p-5">
                <div className="flex gap-5 "> 
                    <AddStaffs />
                    <AddDesignation />
                </div>


            </section>


        </>
    )
}


export default Staffs;