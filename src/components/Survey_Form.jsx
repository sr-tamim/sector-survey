import { useCallback, useRef, useState } from "react"
import Sectors_SelectField from "./Sectors_SelectField"


const Survey_Form = () => {
    const [selectedSectors, setSelectedSectors] = useState([])
    const selectAction = (selected, sector) => {
        if (selected) {
            setSelectedSectors(prev => [...prev, sector])
        } else {
            setSelectedSectors(prev => prev.filter(item => item.id !== sector.id))
        }
    }

    const nameFieldRef = useRef()
    const termCheckboxRef = useRef()
    const [formErrors, setFormErrors] = useState({})
    const submitForm = useCallback(() => {
        const errors = {}

        if (!nameFieldRef.current.value) errors.Name = 'Write down your name first'

        if (!selectedSectors.length) errors.Sectors = 'Select at least one sector'

        if (!termCheckboxRef.current.checked) errors.TermsCheckbox = 'Agree to our terms to continue'

        setFormErrors(errors)
    }, [selectedSectors])
    return (<div className="w-full grid gap-4 my-4">
        <div className="form-control w-full max-w-sm mx-auto">
            <label className="label">
                <span className="label-text">Name:</span>
            </label>
            <input type="text" placeholder="Type here" ref={nameFieldRef}
                className="input input-primary" autoComplete="name" />
            <div className="label-text-alt text-red-600 mt-1">{formErrors?.Name}&nbsp;</div>
        </div>
        <div className="w-full max-w-sm mx-auto">
            <label className="label">
                <span className="label-text">Sectors:</span>
            </label>
            <Sectors_SelectField
                selectedSectors={selectedSectors}
                selectAction={selectAction} />
            <div className="label-text-alt text-red-600 mt-1">{formErrors?.Sectors}&nbsp;</div>
        </div>

        <div className="form-control w-full max-w-sm mx-auto">
            <label className="label justify-center gap-4 cursor-pointer">
                <input type="checkbox" ref={termCheckboxRef}
                    className="checkbox checkbox-primary" />
                <span className="label-text">Agree to terms</span>
            </label>
            <div className="label-text-alt text-red-600 text-center">{formErrors?.TermsCheckbox}&nbsp;</div>
        </div>
        <button className="btn btn-primary w-full max-w-sm mx-auto"
            onClick={submitForm}>Save</button>
    </div>);
};

export default Survey_Form;