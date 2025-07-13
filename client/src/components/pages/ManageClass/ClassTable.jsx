import { Tables } from "../../ui/export";
import { classProvider } from "../../../context/ClassContext"
import { classData, classHeadings } from "./data";

const ClassTable = () => {

    return(
        <>  
            <classProvider>
                <Tables classData={classData} classHeadings={classHeadings}/>
            </classProvider>
        </>
    )
}

export default ClassTable;