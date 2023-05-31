import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/common/Layout"
import Datafecting from "../Pages/Datafecting"

export const Element = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Datafecting />
            }
        ]
    }
])