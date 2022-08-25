import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const Home = React.lazy(() => import("./Components/Page/Home/Home"));
  const Contact = React.lazy(() => import("./Components/Page/Contact/Contact"));
  const Support = React.lazy(() => import("./Components/Page/Support/Support"));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<h3>Loading..</h3>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <React.Suspense fallback={<h3>Loading..</h3>}>
              <Contact />
            </React.Suspense>
          }
        />
        <Route
          path="/support"
          element={
            <React.Suspense fallback={<h3>Loading..</h3>}>
              <Support />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
