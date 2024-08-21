import React, { useCallback } from "react";
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";

function ReadPage(props) {
    // const obj = useParams()
    // console.log(obj)

    const { tno } = useParams()
    const [queryParams] = useSearchParams()
    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10
    const queryStr = createSearchParams({page, size}).toString()
    
    const navigate = useNavigate()
    const moveToModify = useCallback((tno) => {
        navigate(
            {
                pathname:'/todo/modify/${tno}',
                search: queryStr
            }
        )
    }, [tno, page, size])

    const moveToList = () => {
        navigate(
            {
                pathname:'/todo/list',
                search: queryStr
            }
        )
    }

    return (
        <>
            <div className="text-3xl font-extrabold">
                Todo Read Page Component {tno}
            </div>
            <div>{page}</div>
            <div>{size}</div>
            <div>
                <button onClick={() => moveToModify(33)}>[Test Modify]</button>
                <button onClick={() => moveToList}>[Test List]</button>
            </div>
        </>
    );
}

export default ReadPage;
