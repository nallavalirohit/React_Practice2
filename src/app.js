import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import {RouterProvider, createBrowserRouter, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

const Applayout = () => {
    return (
        <div className="app-container">
            <Header />
            <Outlet />
        </div>
    );
}

const appRoute = createBrowserRouter([
    {
        path: '/',
        element: <Applayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading); React element rendering
// root.render(<Applayout/>); // React Component rendering

root.render(<RouterProvider router={appRoute}/>); //We are providing the router config to render to the UI using RouterProvider