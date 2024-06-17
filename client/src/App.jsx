import HomePage from "./routes/homePage/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/ListPage";
import { Layout, RequireAuth } from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/Login";
import Register from "./routes/register/register";
import NewPostPage from "./routes/newPostPage/newPostPage";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>,
          loader: listPageLoader
        },
        {
          path:"/:id",
          element:<SinglePage/>,
          loader: singlePageLoader
        },
        {
          path:"/profile",
          element:<ProfilePage/>,
          loader: profilePageLoader
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          //loader: profilePageLoader
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage/>,
          //loader: profilePageLoader
        },
        {
          path: "/add",
          element: <NewPostPage/>,
          //loader: profilePageLoader
        },
      ],
    }
  ]);

  return (

    <RouterProvider router={router}/>
  );
}

export default App;
