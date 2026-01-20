import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import CV from "./pages/CV";
import WikiIndex from "./pages/wiki/WikiIndex";
import ReactWiki from "./pages/wiki/ReactWiki";
import TypeScriptWiki from "./pages/wiki/TypeScriptWiki";
import TailwindWiki from "./pages/wiki/TailwindWiki";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "cv", element: <CV /> },
      { path: "wiki", element: <WikiIndex /> },
      { path: "wiki/react", element: <ReactWiki /> },
      { path: "wiki/typescript", element: <TypeScriptWiki /> },
      { path: "wiki/tailwind", element: <TailwindWiki /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
