import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Submissions = () => {
    const [submissions, setSubmissions] = useState([])
    useEffect(() => {
        const savedData = localStorage.getItem('submissions')
        console.log(JSON.parse(savedData))
    }, [])
    return (<section>
        {!localStorage.getItem('submissions') && <div className="text-gray-500 my-8">
            You haven't submitted any info yet. <Link to="/" className="underline text-primary">Submit now</Link>
        </div>}
    </section>);
};

export default Submissions;