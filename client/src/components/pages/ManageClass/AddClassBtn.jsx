import { useState } from "react";
import { AddClassForm } from "./export";
import { PopUp } from "../../ui/export";

const AddClassBtn = () => {

    const [ addClass, setAddClass ] = useState(false);
    
    const handleClassForm = () => {
        setAddClass(true);
    }

    return(
        <>
            <PopUp btnName = "Add Class" formComponent={<AddClassForm/>}/>
        </>
    )
}

export default AddClassBtn;