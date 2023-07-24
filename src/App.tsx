import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import RotationPage from "./pages/RotationPage";
import BolusCalculatorPage from "./pages/BolusCalculatorPage";
import FoodCheckerPage from "./pages/FoodCheckerPage";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import FoodDetailPage from "./pages/FoodDetailPage";

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
      { path: "/foodchecker/:foodId", element: <FoodDetailPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);
const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
