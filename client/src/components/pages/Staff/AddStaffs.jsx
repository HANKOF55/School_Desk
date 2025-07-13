import { PopUp } from "../../ui/export";
import { StaffsRegistrationForm } from "./export"

const AddStaffs = () => {

    return(
        <>
            <section>
                <PopUp btnName="Add Staffs" formComponent={<StaffsRegistrationForm/>} /> 
            </section>
        </>
    )
}

export default AddStaffs;