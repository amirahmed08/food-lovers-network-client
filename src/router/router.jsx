import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import AllReview from "../Pages/AllReview";
import MyReviews from "../Pages/MyReviews";
import AddReviews from "../Pages/AddReviews";
import Authentication from "../Components/Authentication/Authentication";
import Login from "../Pages/Login";
import Register from "../Pages/register";
import Error from "../Pages/Error";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Root,
            children: [
                {
                    index: true,
                    path: "/",
                    Component: Home
                },
                {
                    path: "/all-review",
                    Component:AllReview,
                },
                {
                    path: "/my-reviews",
                    Component:MyReviews,
                },
                {
                    path: "/add-reviews",
                    Component:AddReviews,
                }
            ]
        },

        {
            path: "/auth",
            Component:Authentication,
            children: [
                {
                    path: "/auth/login",
                    Component:Login,
                },
                {
                    path: "/auth/register",
                    Component:Register,
                }
            ]
        },
        {
            path:"/*",
            Component: Error,
        }
    ]
)

export default router;