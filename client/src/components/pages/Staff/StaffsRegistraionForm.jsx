import { useState } from "react";

const StaffsRegistrationForm = () => {

    const { gender, setGender } = useState();

    const handleGenderField = () => {
        setGender(gender);
    }

    return (
        <>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 flex flex-wrap gap-6 justify-center items-center">
                <legend className="fieldset-legend text-2xl">Personal Details</legend>

                <div className="flex flex-wrap mx-auto md:w-[85%]">
                    <div className="flex flex-col md:min-w-[400px]">
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Enter Name" />
                    </div>


                    <div className="flex flex-col md:min-w-[400px]">
                        <label className="label flex-1">Stream</label>
                        <input type="text" className="input" placeholder="Name" />
                    </div>

                    <div className="flex flex-col md:min-w-[400px]">
                        <label className="label flex-1">Academic Board</label>
                        <input type="Number" className="input" placeholder="Name" />
                    </div>

                    <div className="flex flex-col md:min-w-[400px]">
                        <fieldset className="fieldset bg-base-200 border-gray-600 rounded-box w-xs border p-4">
                            <legend className="fieldset-legend">Subjects</legend>
                            <div className="join">
                                <input type="text" className="input join-item" placeholder="Product name" />
                                <button className="btn btn-primary join-item">Add Subject</button>
                            </div>
                        </fieldset>
                    </div>
                </div>

            </fieldset>

        </>
    )
}

export default StaffsRegistrationForm