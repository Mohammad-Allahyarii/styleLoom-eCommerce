
import MainAppLayout from "@/Layouts/MainAppLayou/MainAppLayout"
import { useState } from "react"
import HomePage from "@/Pages/HomePage/HomePage"
import { createBrowserRouter } from "react-router"




export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainAppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  }
])
