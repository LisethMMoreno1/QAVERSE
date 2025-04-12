import type React from "react"
interface SidebarSectionProps {
  title: string
  children: React.ReactNode
}

export function SidebarSection({ title, children }: SidebarSectionProps) {
  return (
    <div className="mb-4">
      <h3 className="px-4 py-2 text-xs font-medium text-gray-500">{title}</h3>
      <div className="space-y-1">{children}</div>
    </div>
  )
}
