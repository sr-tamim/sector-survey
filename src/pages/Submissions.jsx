import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../App";

const Submissions = () => {
    const [submissions, setSubmissions] = useState([])
    useEffect(() => {
        const savedData = localStorage.getItem('submissions')
        if (!savedData) return
        axios.post(`${API_URL}/users/find`, JSON.parse(savedData))
            .then(({ data }) => setSubmissions(data))
    }, [])

    return (<section className="max-w-xl mx-auto">
        {!submissions.length && <div className="animate-pulse text-center my-20">Loading...</div>}

        <div className="grid gap-6">
            <h3 className="mt-10 text-xl font-semibold text-primary">My Submissions</h3>
            {submissions.map(item => <Link to={`/submissions/${item._id}`} className="card bg-base-100 shadow-lg">
                <div className="card-body">
                    <h2 className="card-title capitalize">{item.name}</h2>
                    <div className="flex flex-wrap gap-2">
                        {item.sectors.map(sector => <div className="badge badge-primary badge-outline">{sector.name}</div>)}
                    </div>
                    <div className="card-actions justify-end">
                        <div className="text-sm text-gray-500">Submitted at {new Date(item.timestamp).toLocaleString()}</div>
                    </div>
                </div>
            </Link>)}
        </div>

        {!localStorage.getItem('submissions') ? <div className="text-gray-500 my-8">
            You haven't submitted any info yet. <Link to="/" className="underline text-primary">Submit now</Link>
        </div>
            : <div className="text-center text-primary mt-16 capitalize"
            ><Link to="/">Submit again</Link></div>}
    </section>);
};

export default Submissions;