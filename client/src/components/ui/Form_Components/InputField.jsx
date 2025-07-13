

const InputField = ({fieldName, filedType, fieldPlaceHolder}) => {

    return (
        <>
            <div className="flex flex-col md:min-w-[400px]">
                <label className="label">{fieldName}</label>
                <input type={filedType} className="input" placeholder={fieldPlaceHOlder} />
            </div>
        </>
    )
}

export default InputField;