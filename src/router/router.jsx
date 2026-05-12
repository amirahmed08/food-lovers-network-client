import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import AllReview from "../Pages/AllReview";
import MyReviews from "../Pages/MyReviews";
import AddReviews from "../Pages/AddReviews";
import Authentication from "../Components/Authentication/Authentication";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Pages/Error";
import CardDetailPage from "../Pages/CardDetailPage";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Pages/Loading";


const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Root,
            HydrateFallback: Loading,
            children: [
                {
                    index: true,
                    path: "/",
                    loader: () => fetch(`https://food-lover-server-seven.vercel.app/latest-foods`),
                    Component: Home,
                },
                {
                    path: "/all-review",
                    loader: () => fetch(`https://food-lover-server-seven.vercel.app/foods`),
                    Component: AllReview,
                },
                {
                    path: "/my-reviews",
                    element:
                    <PrivateRoute>
                        <MyReviews></MyReviews>
                    </PrivateRoute>,
                },
                {
                    path: "/add-reviews",
                    element:
                    <PrivateRoute>
                        <AddReviews></AddReviews>
                    </PrivateRoute>,
                },
                {
                    path: "/foods/:id",
                    loader: ({ params }) => fetch(`http://localhost:3000 /foods/${params.id}`),
                    element: <PrivateRoute><CardDetailPage /></PrivateRoute>,
                }
            ]
        },

        {
            path: "/auth",
            Component: Authentication,
            HydrateFallback: Loading,
            children: [
                {
                    path: "/auth/login",
                    Component: Login,
                },
                {
                    path: "/auth/register",
                    Component: Register,
                }
            ]
        },
        {
            path: "/*",
            Component: Error,
        }
    ]
)

export default router;