import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../App";
import EditSubmission_Form from "../components/EditSubmission_Form";

const EditSubmission = () => {
    const { id: submissionId } = useParams()
    const [submissionInfo, setSubmissionInfo] = useState({})
    useEffect(() => {
        if (!submissionId) return
        axios.post(`${API_URL}/users/find`, [submissionId])
            .then(({ data }) => setSubmissionInfo(data[0]))
    }, [submissionId])

    return (<section className="text-center max-w-sm mx-auto my-10">
        <h3 className="text-primary font-semibold text-xl">Edit your submission</h3>
        {submissionInfo?._id && <EditSubmission_Form submissionInfo={submissionInfo} />}
        <div className="mt-8">
            <Link to="/submissions" className="text-primary">View all submissions</Link>
        </div>
    </section>);
};

export default EditSubmission;