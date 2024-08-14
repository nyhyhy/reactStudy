import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="text-3xl">
            <div>About Page!</div>
            <div><Link to={'/'}>Go Main Page!</Link></div>
        </div>
    );
}

export default AboutPage;