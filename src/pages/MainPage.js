import { Link } from "react-router-dom";

const Mainpage = () => {
    return (
        <div className=" text-3xl">
            <div>Main page</div>
            <div><Link to={'/about'}>Go Main Page!</Link></div>
        </div>
    );
}

export default Mainpage;