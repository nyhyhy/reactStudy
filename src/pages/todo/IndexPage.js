import { Outlet, useNavigate } from "react-router-dom";
import React, { useCallback } from "react";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {

    const navigate = useNavigate();
    const handleClickList = useCallback(() => {
        console.log("handleClickList!")
        navigate({pathname: 'list'})
    }, [])
    const handleClickAdd = useCallback(() => {
        console.log("handleClickAdd!")
        navigate({pathname: 'add'})
    }, [])

    return (
        <BasicLayout>
            <div className="w-full flex m-2 p-2 ">
                <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline" onClick={handleClickList}>LIST</div>
                <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline" onClick={handleClickAdd}>ADD</div>
            </div>
            <div className="flex flex-wrap w-full">
                <Outlet /> 
            </div>
        </BasicLayout>
    );
}

export default IndexPage;