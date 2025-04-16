import { Link } from "lucide-react";
import { QaverseLogo } from "./qaverse-logo";
import { SearchBar } from "./search-bar";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-4 py-2">
      <div className="flex items-center">
        <QaverseLogo />
      </div>
      <div className="flex items-center gap-4">
        <SearchBar />
        <nav className="flex items-center gap-2">
          <Link href="/contacto" className="text-gray-600 hover:text-gray-900">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
