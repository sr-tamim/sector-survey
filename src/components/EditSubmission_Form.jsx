import axios from "axios";
import { useCallback, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { API_URL } from "../App";
import Sectors_SelectField from "./Sectors_SelectField"


const EditSubmission_Form = ({ submissionInfo }) => {
    const navigate = useNavigate() // react router function to navigate through pages

    const [selectedSectors, setSelectedSectors] = useState(submissionInfo?.sectors)

    // below function is called whenever any sector option is clicked
    const selectAction = (selected, sector) => {
        if (selected) {
            setSelectedSectors(prev => [...prev, sector])
        } else {
            setSelectedSectors(prev => prev.filter(item => item.id !== sector.id))
        }
    }

    const nameFieldRef = useRef() // name input

    const [formErrors, setFormErrors] = useState({}) // error object for the form
    const submitForm = useCallback(() => {
        const errors = {}

        // detect errors
        if (!nameFieldRef.current.value) errors.Name = 'Write down your name first'
        if (!selectedSectors.length) errors.Sectors = 'Select at least one sector'

        setFormErrors(errors) // set errors in the state
        if (Object.keys(errors).length) return

        // upload edited values to the database
        const formValues = {
            _id: submissionInfo._id,
            name: nameFieldRef.current.value,
            sectors: selectedSectors,
            editedAt: Date.now()
        }
        axios.put(`${API_URL}/users`, formValues)
            .then(({ data }) => {
                if (!data.modifiedCount) return
                alert('Submission edited successful')
                navigate('/submissions') // go to 'submissions' page to view all submissions
            })
    }, [selectedSectors])

    return (<div className="w-full grid gap-4 my-4">
        {/* --------- the form ---------- */}
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Name:</span>
            </label>
            <input type="text" placeholder="Type here" ref={nameFieldRef} autoComplete="name"
                className="input input-primary" defaultValue={submissionInfo?.name} />
            <div className="label-text-alt text-red-600 mt-1">{formErrors?.Name}&nbsp;</div>
        </div>
        <div className="w-full">
            <label className="label">
                <span className="label-text">Sectors:</span>
            </label>

            {/* custom multiselect input field developed by "SR Tamim" */}
            <Sectors_SelectField
                selectedSectors={selectedSectors}
                selectAction={selectAction} />
            <div className="label-text-alt text-red-600 mt-1">{formErrors?.Sectors}&nbsp;</div>
        </div>

        <button className="btn btn-primary w-full"
            onClick={submitForm}>Update</button>
    </div>);
};

export default EditSubmission_Form;