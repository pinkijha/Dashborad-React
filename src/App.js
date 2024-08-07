
import React from "react";
import ReactDOM from "react-dom/client";
import DashboardBody from "./Components/DashboardBody";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Chart from "./Components/Chart";

const AppLayout = () => {
    return (
      <div className="">
          <DashboardBody/> 
      </div>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout></AppLayout>,
      children:[  
        {path: "/",
          element:<Home></Home>
        },          
        {
          path: "/home",
          element: <Home/>
        },
        {
          path: "/chart",
          element: <Chart/>
        },
      ]
    }
  ])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
