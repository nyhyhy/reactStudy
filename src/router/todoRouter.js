import { lazy, Suspense } from "react"
import { Navigate } from "react-router-dom"

const Loading = <div>Loading...</div>
const TodoList = lazy(() => import("../pages/todo/ListPage"))
const TodoRead = lazy(() => import("../pages/todo/ReadPage"))

const todoRouter = () => {
    return [
        {
            path: "list",
            element: <Suspense fallback={Loading}> <TodoList /> </Suspense>
        },
        {
            path: "", // /todo 접속 시 /todo/list 로 이동
            element: <Navigate replace="true" to="list"/>
        },
        {
            path: "read/:tno", // /todo/read/10 
            element: <Suspense fallback={Loading}><TodoRead/></Suspense>
        }
    ]
}

export default todoRouter;