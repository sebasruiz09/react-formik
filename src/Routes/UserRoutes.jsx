import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LazyLoad } from "../Components/Page/LazyLoad/LazyLoad";

export const UserRoutes = () => {
  const Home = React.lazy(() => import("../Components/Page/Home/Home"));
  const Support = React.lazy(() => import("../Components/Page/Support/Support"));
  const SingUp = React.lazy(()=> import('../Components/Page/SignUp/SignUp'))

  return (
    <Suspense fallback={<LazyLoad />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/signup" element={<SingUp />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
