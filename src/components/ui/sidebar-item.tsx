import type React from "react";
import { cn } from "../../lib/utils";

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
  onClick?: () => void;
}

export function SidebarItem({
  icon,
  title,
  active,
  onClick,
}: SidebarItemProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-4 py-2 text-sm cursor-pointer",
        active
          ? "bg-yellow-100 text-yellow-800 font-medium"
          : "text-gray-700 hover:bg-gray-100"
      )}
    >
      {icon}
      <span>{title}</span>
    </div>
  );
}
