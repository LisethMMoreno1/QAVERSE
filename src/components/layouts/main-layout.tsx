import type { ReactNode } from "react";
import type { RouteKey } from "../../routes/router";
import { Header } from "../ui/header";
import { LeftSidebar } from "../ui/left-sidebar";
import { RightSidebar } from "../ui/right-sidebar";

interface MainLayoutProps {
  children: ReactNode;
  setCurrentPage: (page: RouteKey) => void;
  currentPage: RouteKey;
}

export function MainLayout({
  children,
  setCurrentPage,
  currentPage,
}: MainLayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-84 flex-shrink-0 overflow-y-auto border-r border-gray-200">
          <LeftSidebar
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <main className="flex-1 overflow-y-auto p-6">{children}</main>

        <div className="w-84 flex-shrink-0 overflow-y-auto border-l border-gray-200">
          <RightSidebar currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
}
