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
import CardDetailPage from "../Pages/CardDetailPage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Root,
            children: [
                {
                    index: true,
                    path: "/",
                    loader: () => fetch(`http://localhost:3000/latest-foods`),
                    Component: Home
                },
                {
                    path: "/all-review",
                    loader: () => fetch(`http://localhost:3000/foods`),
                    Component: AllReview,
                },
                {
                    path: "/my-reviews",
                    Component: MyReviews,
                },
                {
                    path: "/add-reviews",
                    Component: AddReviews,
                },
                {
                    path: "/foods/:id",
                    loader: ({ params }) => fetch(`http://localhost:3000/foods/${params.id}`),
                    Component: CardDetailPage,
                }
            ]
        },

        {
            path: "/auth",
            Component: Authentication,
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