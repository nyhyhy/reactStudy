import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function ReadPage(props) {
    // const obj = useParams()
    // console.log(obj)

    const { tno } = useParams()
    const [queryParams] = useSearchParams()
    const page = queryParams.get("page") || 1
    const size = queryParams.get("size") || 10

    return (
        <>
            <div className="text-3xl font-extrabold">
                Todo Read Page Component {tno}
            </div>
            <div>{page}</div>
            <div>{size}</div>
        </>
    );
}

export default ReadPage;
