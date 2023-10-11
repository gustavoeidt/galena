import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SuperPartnersPage } from "./pages/SuperPartnersPage";
import { PartnerDetailsPage } from "./pages/PartnerDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SuperPartnersPage />,
  },
  {
    path: "partner/:partnerName",
    element: <PartnerDetailsPage />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
