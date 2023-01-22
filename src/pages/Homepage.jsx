import { Link } from "react-router-dom";
import Survey_Form from "../components/Survey_Form";

const Homepage = () => {
    return (<section className="flex flex-col items-center max-w-sm mx-auto my-8">
        <h3 className="text-gray-600 text-center">Please enter your name and pick the Sectors you are currently involved in.</h3>
        <Survey_Form />
        <div className="mt-4">
            <Link to="/submissions" className="text-primary">View my submissions</Link>
        </div>
    </section>);
};

export default Homepage;