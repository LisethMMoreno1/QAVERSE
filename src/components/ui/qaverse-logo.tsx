import { FileText, Link } from "lucide-react"

export function QaverseLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-yellow-500 font-bold text-xl">
      <FileText className="h-6 w-6" />
      <span>QAVERSE</span>
    </Link>
  )
}
