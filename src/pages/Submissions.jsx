import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../App";

const Submissions = () => {
    const [submissions, setSubmissions] = useState([])

    // get submissions from database
    useEffect(() => {
        const savedData = localStorage.getItem('submissions') // get submission ids from localstorage
        if (!savedData) return
        axios.post(`${API_URL}/users/find`, JSON.parse(savedData))
            .then(({ data }) => setSubmissions(data))
    }, [])

    return (<section className="max-w-xl mx-auto">
        {/* show "nothing" if there is no submission info in localStorage */}
        {!localStorage.getItem('submissions') ? <div className="text-gray-500 my-8 text-center">
            You haven't submitted any info yet. <Link to="/" className="underline text-primary">Submit now</Link>
        </div>
            // show loading if submission array is empty
            : <>{!submissions.length ? <div
                className="animate-pulse text-center text-primary my-20"
            >Loading...</div>
                // --------- show submission list ----------
                : <div className="grid gap-6 px-2">
                    <h3 className="mt-10 text-xl font-semibold text-primary text-center">My Submissions</h3>
                    {submissions.map(item => <Link key={item._id}
                        to={`/submissions/${item._id}`}
                        className="card bg-base-100 shadow-lg">
                        <div className="card-body px-6 py-4">
                            <h2 className="card-title capitalize">{item.name}</h2>
                            <div className="flex flex-wrap gap-2">
                                {item.sectors.map(sector => <div key={sector.id}
                                    className="badge badge-primary badge-outline">{sector.name}</div>)}
                            </div>
                            <div className="text-xs text-gray-500 flex flex-col items-end mt-1">
                                <div>
                                    Submitted at {new Date(item.timestamp).toLocaleString()}
                                </div>
                                {item.editedAt && <div>
                                    Edited at {new Date(item.editedAt).toLocaleString()}
                                </div>}
                            </div>
                        </div>
                    </Link>)}
                </div>}

                <div className="text-center text-primary mt-16 capitalize">
                    <Link to="/">Submit again</Link> {/* go to homepage to submit another response */}
                </div>
            </>
        }
    </section>);
};

export default Submissions;