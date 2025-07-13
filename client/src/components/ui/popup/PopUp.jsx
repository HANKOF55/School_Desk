// import { AddClassForm } from "../../pages/ManageClass/export";

const PopUp = ({ btnName, formComponent }) => {

    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>{btnName}</button>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">

                    {/* Form field starts here */}

                        {formComponent}

                    {/* Form field stops here */}

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                    </div>

                    <button className="btn btn-success px-8">
                        Save
                    </button>
                </div>
            </dialog>
        </>
    )
}

export default PopUp;