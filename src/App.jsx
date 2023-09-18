import React from "react";

import Headers from './headers/Headers.jsx';
import Main from './main/Main.jsx'
import Smoothies from "./smoothies/Smoothies.jsx"

import { RouterProvider, createHashRouter,createBrowserRouter, Outlet } from "react-router-dom";

const router = createBrowserRouter([{
    path: '/',
    element: <>
        <Headers />
        <Outlet/></>,
    children: [
        {
            index: true,
            element: <Main />
        },
        {
            path: 'smoothies',
            element: <Smoothies />
        }]
},
{
    path: '*',
    element: <p>Page not found</p>
}
])


export default () => {
    return <>
        <div>
            <RouterProvider router={router} />
        </div>
    </>
} 