import {
  FileText,
  Eye,
  GitCommit,
  List,
  FileCode,
  CheckSquare,
  Zap,
} from "lucide-react";
import { SidebarSection } from "./sidebar-section";
import { SidebarItem } from "./sidebar-item";
import { RouteKey } from "../../routes/router";

interface Props {
  setCurrentPage?: (page: RouteKey) => void;
}

export function LeftSidebar({ setCurrentPage }: Props) {
  return (
    <aside className="w-56 border-r bg-gray-50 overflow-y-auto">
      <div className="py-4">
        <SidebarSection title="Guías y Buenas Prácticas">
          <SidebarItem
            icon={<FileText size={18} />}
            title="Fundamentos de QA"
            onClick={() => setCurrentPage?.("home")}
            active
          />
        </SidebarSection>

        <SidebarSection title="Estándares QAVERSE">
          <SidebarItem
            icon={<Eye size={18} />}
            title="Visión General y Configuración"
          />
          <SidebarItem
            icon={<GitCommit size={18} />}
            title="Convención de Commits de Git"
          />
          <SidebarItem
            icon={<List size={18} />}
            title="Detalles de Implementación"
          />
          <SidebarItem
            icon={<CheckSquare size={18} />}
            title="Calidad y Convenciones"
          />
        </SidebarSection>

        <SidebarSection title="Framework">
          <SidebarItem
            icon={<Zap size={18} />}
            title="Cypress"
            onClick={() => setCurrentPage?.("cypress")}
          />
          <SidebarItem
            icon={<FileCode size={18} />}
            title="Playwright"
            onClick={() => setCurrentPage?.("playwright")}
          />
        </SidebarSection>

        <SidebarSection title="Artículos y Charlas">
          <SidebarItem
            icon={<Zap size={18} />}
            title="Automatización de Pruebas"
          />
          <SidebarItem
            icon={<FileCode size={18} />}
            title="Pruebas de Integración"
          />
        </SidebarSection>
      </div>
    </aside>
  );
}
