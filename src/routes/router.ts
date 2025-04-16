import { FC, lazy } from "react";

const TestingStrategiesPage = lazy(() => import("../components/pages/testing-strategies-page"));
const CypressPage = lazy(() => import("../components/pages/frameworks/cypress-page"));
const PlaywrightPage = lazy(() => import("../components/pages/frameworks/playwright-page"));
const FoundationsOfQAPage = lazy(() => import("../components/pages/fundamentals/foundations-of-qa-page"));
const TypesOfSoftwareTestingPage = lazy(() => import("../components/pages/fundamentals/types-of-software-testing-page"));
const FunctionalTestingPage = lazy(() => import("../components/pages/fundamentals/functional-testing-page"));
const WelcomeBannerAlt = lazy(() => import("../components/pages/welcome-banner-page"));
const SeleniumPage = lazy(() => import("../components/pages/frameworks/selenium-page"));
const JMeterPage = lazy(() => import("../components/pages/frameworks/jmeter-page"));

export type RouteKey = "home" | "cypress" | "playwright" | "foundationsOfQAPage" | "typesOfSoftwareTestingPage" | "functionalTestingPage" | "testingStrategiesPage" | "seleniumPage" | "jMeterPage";

export const routes: Record<RouteKey, { path: string; component: FC }> = {
    home: { path: "/home", component: WelcomeBannerAlt },
    cypress: { path: "/frameworks/cypress", component: CypressPage },
    testingStrategiesPage: { path: "/frameworks/cypress", component: TestingStrategiesPage },
    playwright: { path: "/frameworks/playwright", component: PlaywrightPage },
    foundationsOfQAPage: { path: "/frameworks/foundationsOfQAPage", component: FoundationsOfQAPage },
    typesOfSoftwareTestingPage: { path: "/frameworks/typesOfSoftwareTestingPage", component: TypesOfSoftwareTestingPage },
    functionalTestingPage: { path: "/frameworks/functionalTestingPage", component: FunctionalTestingPage },
    seleniumPage: { path: "/frameworks/functionalTestingPage", component: SeleniumPage },
    jMeterPage: { path: "/frameworks/functionalTestingPage", component: JMeterPage },

};

export const getRouteKeyByPath = (path: string): RouteKey => {
    const entry = Object.entries(routes).find(([, value]) => value.path === path);
    return (entry?.[0] as RouteKey) || "home";
};
