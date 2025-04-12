import { lazy } from "react";
import { FC } from "react";

const TestingStrategiesPage = lazy(() => import("../components/pages/testing-strategies-page"));
const CypressPage = lazy(() => import("../components/pages/frameworks/cypress-page"));
const PlaywrightPage = lazy(() => import("../components/pages/frameworks/playwright-page"));

export type RouteKey = "home" | "cypress" | "playwright";

export const routes: Record<RouteKey, { path: string; component: FC }> = {
    home: { path: "/", component: TestingStrategiesPage },
    cypress: { path: "/frameworks/cypress", component: CypressPage },
    playwright: { path: "/frameworks/playwright", component: PlaywrightPage },
};

export const getRouteKeyByPath = (path: string): RouteKey => {
    const entry = Object.entries(routes).find(([, value]) => value.path === path);
    return (entry?.[0] as RouteKey) || "home";
};
