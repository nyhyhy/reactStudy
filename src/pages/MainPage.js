import { Link } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";

const Mainpage = () => {
    return (
        // <div className=" text-3xl">
        //     <div>Main page</div>
        //     <div><Link to={'/about'}>Go About Page!</Link></div>
        // </div>
        <BasicLayout>
            <div className=" text-3xl ">Main page</div>

            <div className="text-4xl font-extrabold m-2 p-3 bg-green-500">
      Hello World
    </div>
        </BasicLayout>
    );
}

export default Mainpage;