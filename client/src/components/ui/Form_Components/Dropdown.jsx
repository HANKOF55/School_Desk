
const Dropdown = () => {

    return(
        <>

                    <div style={{transform: "translateY(-8px)"}} className="flex flex-col md:min-w-[400px]">
                       
                        <fieldset className="fieldset flex flex-col gap-0">
                            <legend className="fieldset-legend font-light text-gray-400">Gender</legend>
                            <select style={{transform: "translateY(-8px)"}} defaultValue="Pick a browser" className="select">
                                <option disabled={true}>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            {/* <span className="label">Optional</span> */}
                        </fieldset>
                    
                    </div>

        </>
    )
}

export default Dropdown;