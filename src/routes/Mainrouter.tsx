import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/common/Layout"
import Datafecting from "../Pages/Datafecting"
import Statemanagement from "../Pages/Statemanagement"
import Todo from "../Pages/Todo"

export const Element = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Datafecting />
            },
            {
                path: "/statemanagement",
                element: <Statemanagement />
            },
            {
                path: "/todo",
                element: <Todo />
            }
        ]
    }
])