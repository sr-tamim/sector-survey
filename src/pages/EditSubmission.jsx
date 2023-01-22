import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../App";
import EditSubmission_Form from "../components/EditSubmission_Form";

const EditSubmission = () => {
    const { id: submissionId } = useParams() // get id from url
    const [submissionInfo, setSubmissionInfo] = useState({})

    // get specified submission info from database using the id
    useEffect(() => {
        if (!submissionId) return
        axios.post(`${API_URL}/users/find`, [submissionId])
            .then(({ data }) => setSubmissionInfo(data[0]))
    }, [submissionId])

    return (<section className="max-w-sm mx-auto my-10">
        {/* show loading if submission info isn't loaded */}
        {!submissionInfo?._id ? <div
            className="animate-pulse text-center text-primary my-20"
        >Loading...</div> : <>
            <h3 className="text-center text-primary font-semibold text-xl">Edit your submission</h3>
            <EditSubmission_Form submissionInfo={submissionInfo} />
        </>}
        <div className="text-center mt-8"> {/* go back to all submissions page */}
            <Link to="/submissions" className="text-primary">View all submissions</Link>
        </div>
    </section>);
};

export default EditSubmission;