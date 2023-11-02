import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Lyrics from "./pages/Lyrics.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // error: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/me",
        element: <Profile />,
      },
      {
        path: "/songs/:songId",
        element: <Lyrics />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
