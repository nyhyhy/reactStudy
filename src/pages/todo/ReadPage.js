import React from "react";
import { useParams } from "react-router-dom";

function ReadPage(props) {
    const obj = useParams()
    console.log(obj)

    const {tno} = useParams()

    return (
        <div className="text-3xl font-extrabold">
            Todo Read Page Component {tno}
        </div>
    );
}

export default ReadPage;
