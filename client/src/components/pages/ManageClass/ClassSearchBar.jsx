
import { useState } from "react";

const ClassSearchBar = () => {

    const [academicYear, setAcademicYear] = useState("Academic Year");
    const [className, setClassName] = useState("Class");
    const [section, setSection] = useState("Section");
    const [classStream, setClassStream] = useState("Stream");



    const handleClassSearch = () => { }

    const Years = [
        { year: "2020-2021", },
        { year: "2021-2022", },
        { year: "2022-2023", },
        { year: "2023-2024", },
        { year: "2024-2025", }
    ]

    const Classes = [
        { label: "Nursery", value: "nursery" },
        { label: "LKG", value: "lkg" },
        { label: "UKG", value: "ukg" },
        { label: "Class 1", value: "1" },
        { label: "Class 2", value: "2" },
        { label: "Class 3", value: "3" },
        { label: "Class 4", value: "4" },
        { label: "Class 5", value: "5" },
        { label: "Class 6", value: "6" },
        { label: "Class 7", value: "7" },
        { label: "Class 8", value: "8" },
        { label: "Class 9", value: "9" },
        { label: "Class 10", value: "10" },
        { label: "Class 11", value: "11" },
        { label: "Class 12", value: "12" }
    ];

    const Sections = [
        { label: "Section A", value: "A" },
        { label: "Section B", value: "B" },
        { label: "Section C", value: "C" },
        { label: "Section D", value: "D" },
        { label: "Section E", value: "E" },
        { label: "Section F", value: "F" },
        { label: "Section G", value: "G" }
    ];

    const Streams = [
        { label: "Science", value: "science" },
        { label: "Commerce", value: "commerce" },
        { label: "Arts", value: "arts" }
    ];




    return (
        <>
            <section className="bg-gray-700 h-13 rounded-xl inline-flex items-center gap-10 px-5 py-4">

                <button className="text-gray-400 text-3xl hover:cursor-pointer hover:text-white active:scale-90" onClick={handleClassSearch}>
                    <i class="ri-search-line"></i>
                </button>

                {/* Academic Year Dropdown */}
                <details className="dropdown">
                    <summary className="btn m-1">
                        {academicYear ? academicYear : "Academic Year"}
                    </summary>
                    <ul
                        className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        {
                            Years.map((academic, index) => {
                                return <li
                                    onClick={() => { setAcademicYear(academic.year) }}
                                    key={index}
                                ><a>{academic.year}</a>
                                </li>
                            })
                        }
                    </ul>
                </details>

                {/* Classes Dropdown */}
                <details className="dropdown">
                    <summary className="btn m-1">
                        {className ? className : "Class"}
                    </summary>
                    <ul
                        className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        {
                            Classes.map((classItem, index) => {
                                return <li
                                    onClick={() => setClassName(classItem.label)}
                                    key={index}
                                ><a>{classItem.label}</a>
                                </li>
                            })
                        }
                    </ul>
                </details>

                {/* Section Dropdown */}
                <details className="dropdown">
                    <summary className="btn m-1">
                        {section ? section : "Section"}
                    </summary>
                    <ul
                        className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        {
                            Sections.map((section, index) => {
                                return <li
                                    onClick={() => setSection(section.label)}
                                    key={index}
                                ><a>{section.label}</a>
                                </li>
                            })
                        }
                    </ul>
                </details>

                {/* Stream Dropdown */}
                <details className="dropdown">
                    <summary className="btn m-1">
                        {classStream ? classStream : "Stream"}
                    </summary>
                    <ul
                        className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        {
                            Streams.map((stream, index) => {
                                return <li
                                    onClick={() => setClassStream(stream.label)}
                                    key={index}
                                ><a>{stream.label}</a>
                                </li>
                            })
                        }
                    </ul>
                </details>


            </section>
        </>
    )
}

export default ClassSearchBar;