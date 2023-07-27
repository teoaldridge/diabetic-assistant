import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RotationPage from "./pages/RotationPage";
import BolusCalculatorPage from "./pages/BolusCalculatorPage";
import FoodCheckerPage from "./pages/FoodSearchPage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/rotation", element: <RotationPage /> },
      { path: "/boluscalculator", element: <BolusCalculatorPage /> },
      { path: "/foodchecker", element: <FoodCheckerPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);
const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
