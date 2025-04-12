import { Search } from "lucide-react"
import { Input } from "./input"

export function SearchBar() {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <Input type="search" placeholder="Buscar..." className="pl-10 pr-4 py-2 w-64 text-sm border rounded-md" />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-xs text-gray-400">Ctrl K</div>
    </div>
  )
}
