"use client";

import { useState, useEffect, Suspense } from "react";
import { getRouteKeyByPath, routes, RouteKey } from "./routes/router";
import { MainLayout } from "./components/layouts/main-layout";

function App() {
  const [currentPage, setCurrentPage] = useState<RouteKey>(() =>
    getRouteKeyByPath(window.location.pathname)
  );

  useEffect(() => {
    const handleNavigation = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.getAttribute("href")?.startsWith("/")) {
        e.preventDefault();
        const href = anchor.getAttribute("href")!;
        const routeKey = getRouteKeyByPath(href);
        setCurrentPage(routeKey);
        window.history.pushState({}, "", href);
      }
    };

    const handlePopState = () => {
      setCurrentPage(getRouteKeyByPath(window.location.pathname));
    };

    document.addEventListener("click", handleNavigation, true);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleNavigation, true);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const PageComponent = routes[currentPage].component;

  return (
    <MainLayout setCurrentPage={setCurrentPage} currentPage={currentPage}>
      <Suspense fallback={<div>Cargando...</div>}>
        <PageComponent />
      </Suspense>
    </MainLayout>
  );
}

export default App;
