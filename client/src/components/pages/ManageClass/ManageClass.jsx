import { useState } from "react";
import { AddClassBtn, ClassSearchBar, ClassTable } from "./export";
import { PopUp } from "../../ui/export";

const ManageClass = () => {
    
    // const {isOpenClassForm, setIsOpenClassForm} = useState(fasle);

    const handlePopUpOpen = () => {

    }


    return(
        <>
            <section className="flex flex-col gap-5 py-5 px-5">
                
            

                {/* Add Class Form Button */}
                <div>
                    <AddClassBtn/>
                </div>

                {/* Class Search Bar  */}
                <div>
                    <ClassSearchBar/>
                </div>

                {/* Class Table */}
                <div>
                    <ClassTable/>
                </div>

            </section>

        </>
    )
}


export default ManageClass;