import { Link } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";

const AboutPage = () => {
    return (
        // <div className="text-3xl">
        //     <div>About Page!</div>
        //     <div><Link to={'/'}>Go Main Page!</Link></div>
        // </div>
        <BasicLayout>
            <div className="text-3xl">About Page!</div>
        </BasicLayout>
    );
}

export default AboutPage;