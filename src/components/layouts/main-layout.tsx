import { ReactNode } from "react";
import { RouteKey } from "../../routes/router";
import { Header } from "../ui/header";
import { LeftSidebar } from "../ui/left-sidebar";
import { RightSidebar } from "../ui/right-sidebar";

interface MainLayoutProps {
  children: ReactNode;
  setCurrentPage?: (page: RouteKey) => void;
  currentPage?: RouteKey;
}

export function MainLayout({
  children,
  setCurrentPage,
  currentPage,
}: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden h-[calc(80vh-64px)]">
        <LeftSidebar setCurrentPage={setCurrentPage} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
        <RightSidebar currentPage={currentPage} />
      </div>
    </div>
  );
}
