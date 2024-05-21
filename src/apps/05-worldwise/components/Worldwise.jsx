import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "../contexts/CitiesContext";
import { AuthProvider } from "../contexts/FakeAuthContext";
import ProtectedRoute from "../pages/ProtectedRoute";
import { useTitle } from "../../../globalContexts/TitleContext";
import "../worldwise.css";
import CityList from "./CityList";
import CountryList from "./CountryList";
import City from "./City";
import Form from "./Form";
import SpinnerFullPage from "./SpinnerFullPage";
const AppLayout = lazy(() => import("../pages/AppLayout"));
const Homepage = lazy(() => import("../pages/Homepage"));
const Login = lazy(() => import("../pages/Login"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Pricing = lazy(() => import("../pages/Pricing"));
const Product = lazy(() => import("../pages/Product"));

function Worldwise() {
  const { setAppTitle } = useTitle();
  useEffect(() => {
    setAppTitle("Worldwise");
  }, [setAppTitle]);

  return (
    <div className="worldwise-container">
      {/* <Link to="/Worldwise/pricing">Pricing</Link>
      <a href="/Worldwise/pricing">Pricing</a> */}
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                <Route path="Worldwise" element={<Homepage />} />
                <Route path="Worldwise/product" element={<Product />} />
                <Route path="Worldwise/pricing" element={<Pricing />} />
                <Route path="Worldwise/login" element={<Login />} />
                <Route
                  path="Worldwise/app"
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  {/* redirect */}
                  <Route index element={<Navigate replace to="cities" />} />
                  <Route path="cities" element={<CityList />} />
                  {/* when calling useParams inside <City /> we will get the url parameter
            named id because we wrote :id here */}
                  <Route path="cities/:id" element={<City />} />
                  <Route path="countries" element={<CountryList />} />
                  <Route path="form" element={<Form />} />
                </Route>
                <Route path="Worldwise/*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </div>
  );
}

export default Worldwise;
