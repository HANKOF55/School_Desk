// import { useContext } from "react";
// import { classContext } from "../../context/ClassContext"
// import { classData, classHeadings } from "../pages/ManageClass/data"
import { PopUp } from "../ui/export";

const Tables = ({ classData, classHeadings }) => {

    // const {classData, classHeadings } = useContext(classContext);

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            {
                                classHeadings.map((heading, index) => {
                                    return (
                                        <th>{heading.label}</th>
                                    )
                                })
                            }

                        </tr>
                    </thead>
                    <tbody>

                        {
                            classData.map((data, index) => {
                                return (
                                    <tr className="hover:bg-base-100" key={index}>
                                        <td>{data.academicYear}</td>
                                        <td>{data.className}</td>
                                        <td>{data.section}</td>
                                        <td>{data.stream}</td>

                                        <td>
                                            {data.subjects.map((sub, index) => (
                                                <span key={index} className="mr-2">{sub}</span>
                                            ))}
                                        </td>

                                        <td className="flex items-center gap-5">
                                            {data.actions.map((button, btnIndex) => (
                                                <PopUp btnName={button} key={btnIndex} className="btn btn-primary">{button}</PopUp>
                                            ))}
                                        </td>
                                    </tr>
                                );
                            })
                        }



                        {/* {
                            classData.map((data, index) => {
                                return (
                                    <tr className="hover:bg-base-100" key={index} >
                                        <td>{data.academicYear}</td>
                                        <td>{data.className}</td>
                                        <td>{data.section}</td>
                                        <td>{data.stream}</td>
                                        <td className="mr-10">{data.subjects.map((sub, index) => (
                                            <item key={index}>{sub}</item>
                                        ))}</td>
                                        <td className="flex items-center gap-5">
                                            {
                                                data.actions.map((button, btnIndex) => (
                                                        <button key={btnIndex} className="btn btn-primary">{button}</button>
                                                )
                                            )
                                            }
                                        </td>
                                    </tr>       
                                )
                            })
                        } */}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Tables;