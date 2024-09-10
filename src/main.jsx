import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import Error from "./pages/Error";

import Home from "./pages/Home.jsx";
import GraphicDesign from "./pages/GraphicDesign.jsx";
import Photography from "./pages/Photography.jsx";
import WebDev from "./pages/WebDev.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/graphic-design",
        element: <GraphicDesign />,
      },
      {
        path: "/photography",
        element: <Photography />,
      },
      {
        path: "/web-development",
        element: <WebDev />,
      },
      {
        path: "/:category/:id",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
