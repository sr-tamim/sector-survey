import axios from "axios";
import { useCallback, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { API_URL } from "../App";
import Sectors_SelectField from "./Sectors_SelectField"


const Survey_Form = () => {
    const navigate = useNavigate() // function for navigate through pages
    const [selectedSectors, setSelectedSectors] = useState([])

    // this function is called when any sector is clicked in sector select component
    const selectAction = (selected, sector) => {
        if (selected) {
            setSelectedSectors(prev => [...prev, sector])
        } else {
            setSelectedSectors(prev => prev.filter(item => item.id !== sector.id))
        }
    }

    const nameFieldRef = useRef() // name input
    const termCheckboxRef = useRef() // agree to the terms or not

    const [formErrors, setFormErrors] = useState({}) // error object for survey form
    const submitForm = useCallback(() => {
        const errors = {}

        // ------------ detect errors --------------
        if (!nameFieldRef.current.value) errors.Name = 'Write down your name first'
        if (!selectedSectors.length) errors.Sectors = 'Select at least one sector'
        if (!termCheckboxRef.current.checked) errors.TermsCheckbox = 'Agree to our terms to continue'

        setFormErrors(errors) // set error in stateful object
        if (Object.keys(errors).length) return

        // -------------- upload form values to database ----------------
        const formValues = {
            name: nameFieldRef.current.value,
            sectors: selectedSectors,
            timestamp: Date.now()
        }
        axios.post(`${API_URL}/users`, formValues)
            .then(({ data }) => {
                if (!data.insertedId) return
                const prevSubmissions = localStorage.getItem('submissions')
                const newSubmissions = prevSubmissions ? [...JSON.parse(prevSubmissions), data.insertedId] : [data.insertedId];

                // save new submission in localStorage
                localStorage.setItem('submissions', JSON.stringify(newSubmissions))
                alert('Submission successful')
                navigate('/submissions') // go to submissions page to view previous submissions
            })
    }, [selectedSectors])

    return (<div className="w-full grid gap-4 my-4">
        {/* ------------ survey form --------------- */}
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Name:</span>
            </label>
            <input type="text" placeholder="Type here" ref={nameFieldRef}
                className="input input-primary" autoComplete="name" />
            <div className="label-text-alt text-red-600 mt-1">{formErrors?.Name}&nbsp;</div>
        </div>
        <div className="w-full">
            <label className="label">
                <span className="label-text">Sectors:</span>
            </label>

            {/* custom multiselect component coded by "SR Tamim" */}
            <Sectors_SelectField
                selectedSectors={selectedSectors}
                selectAction={selectAction} />
            <div className="label-text-alt text-red-600 mt-1">{formErrors?.Sectors}&nbsp;</div>
        </div>

        <div className="form-control w-full">
            <label className="label justify-center gap-4 cursor-pointer">
                <input type="checkbox" ref={termCheckboxRef}
                    className="checkbox checkbox-primary" />
                <span className="label-text">Agree to terms</span>
            </label>
            <div className="label-text-alt text-red-600 text-center">{formErrors?.TermsCheckbox}&nbsp;</div>
        </div>
        <button className="btn btn-primary w-full"
            onClick={submitForm}>Submit</button>
    </div>);
};

export default Survey_Form;