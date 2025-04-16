import { FileText } from "lucide-react";

export function QaverseLogo() {
  return (
    <a
      href="/"
      className="flex items-center gap-2 text-yellow-500 font-bold text-xl"
    >
      <FileText className="h-6 w-6" />
      <span className="hidden sm:inline">QAVERSE</span>
    </a>
  );
}
