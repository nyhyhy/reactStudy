import { Suspense, lazy } from "react";
import Mainpage from "../pages/MainPage";

const { createBrowserRouter } = require("react-router-dom");
const Loading = <div>Loading...</div>
const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/AboutPage"))
const Test = lazy(() => import("../pages/TestPage"))
const Test2 = lazy(() => import("../pages/TestPage2"))
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))
const TodoList = lazy(() => import("../pages/todo/ListPage"))

const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Main /></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About /></Suspense>
    },
    {
        path: "test",
        element: <Suspense fallback={Loading}><Test /></Suspense>,
        children: [
            {
                path: "test2",
                element: <Suspense fallback={Loading}><Test2 /></Suspense>
            }
        ]
    },
    {
        path: "todo",
        element: <Suspense fallback={Loading}><TodoIndex /></Suspense>,
        children: [
            {
                path: "list",
                element: <Suspense fallback={Loading}> <TodoList /> </Suspense>
            }
        ]
    }
])

export default root;