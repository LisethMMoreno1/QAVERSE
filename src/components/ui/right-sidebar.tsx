import { RouteKey } from "../../routes/router";

interface RightSidebarProps {
  currentPage?: RouteKey;
}

export function RightSidebar({ currentPage }: RightSidebarProps) {
  const renderContents = () => {
    switch (currentPage) {
      case "cypress":
        return (
          <ul className="space-y-2 text-sm   h-full ">
            <li>
              <a href="#what-is-cypress" className="hover:underline">
                ¿Qué es Cypress?
              </a>
            </li>
            <li>
              <a href="#basic-example" className="hover:underline">
                Ejemplo Básico
              </a>
            </li>
            <li>
              <a href="#selectors" className="hover:underline">
                Selectores
              </a>
            </li>
            <li>
              <a href="#best-practices" className="hover:underline">
                Buenas prácticas
              </a>
            </li>
          </ul>
        );
      case "playwright":
        return (
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#what-is-playwright" className="hover:underline">
                ¿Qué es Playwright?
              </a>
            </li>
            <li>
              <a href="#installing" className="hover:underline">
                Instalación
              </a>
            </li>
            <li>
              <a href="#basic-test" className="hover:underline">
                Primer Test
              </a>
            </li>
          </ul>
        );
      case "home":
        return (
          <p className="text-sm text-gray-500">
            Explora estrategias de testing automatizado.
          </p>
        );
      default:
        return (
          <p className="text-sm text-gray-400 italic">
            No hay contenido disponible.
          </p>
        );
    }
  };

  return (
    <aside className="w-64 border-l bg-white p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Contenido</h2>
      {renderContents()}
    </aside>
  );
}
