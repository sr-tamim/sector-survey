import Survey_Form from "../components/Survey_Form";

const Homepage = () => {
    return (<section className="flex flex-col items-center max-w-xl mx-auto my-8">
        <h3>Please enter your name and pick the Sectors you are currently involved in.</h3>
        <Survey_Form />
    </section>);
};

export default Homepage;