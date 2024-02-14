import SignUp from "../../components/registrationPage/SignUp"
import LoginPage from "../../pages/LoginPage"
import PublicRouter from "../types/PublicRouter"



const PublicPageRoute: PublicRouter = {
    isPrivate: false,
    routerProps: [
        {
            path: "/login",
            element: <LoginPage />
        },
        {
            path: "/sign-up",
            element: <SignUp />,
        }
    ]
}

//     {
//         path:"",
//         component: LoginPage,
//         private: false,
//     },
//     {
//         path:"/sign-up",
//         component: SignUp,
//         private: false,
//     }
// ]

export default PublicPageRoute