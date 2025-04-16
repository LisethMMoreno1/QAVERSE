import {
  FileCode,
  FileText,
  Zap
} from "lucide-react";
import { useEffect, useState } from "react";
import { RouteKey } from "../../routes/router";
import { SidebarItem } from "./sidebar-item";
import { SidebarSection } from "./sidebar-section";

interface Props {
  setCurrentPage?: (page: RouteKey) => void;
  currentPage: RouteKey;
}

export function LeftSidebar({ setCurrentPage, currentPage }: Props) {
  const [activePage, setActivePage] = useState<RouteKey>(currentPage);

  useEffect(() => {
    setActivePage(currentPage);
  }, [currentPage]);

  return (
    <aside className="w-56 h-full border-r bg-gray-50 overflow-y-auto">
      <div className="py-4">
        <SidebarSection title="Guías y Buenas Prácticas">
          <SidebarItem
            icon={<FileText size={18} />}
            title="Fundamentos de QA"
            onClick={() => setCurrentPage?.("foundationsOfQAPage")}
            active={activePage === "foundationsOfQAPage"}
          />

          <SidebarItem
            icon={<FileText size={18} />}
            title="Tipos de Pruebas"
            onClick={() => setCurrentPage?.("typesOfSoftwareTestingPage")}
            active={activePage === "typesOfSoftwareTestingPage"}
          />

          <SidebarItem
            icon={<FileText size={18} />}
            title="Pruebas Funcionales"
            onClick={() => setCurrentPage?.("functionalTestingPage")}
            active={activePage === "functionalTestingPage"}
          />
        </SidebarSection>

        {/*     <SidebarSection title="Estándares QAVERSE">
          <SidebarItem
            icon={<Eye size={18} />}
            title="Visión General y Configuración"
            active={activePage === "generalAndConfiguration"}
          />
          <SidebarItem
            icon={<GitCommit size={18} />}
            title="Convención de Commits de Git"
            active={activePage === "gitCommitConvention"}
          />
          <SidebarItem
            icon={<List size={18} />}
            title="Detalles de Implementación"
            active={activePage === "implementationDetails"}
          />
          <SidebarItem
            icon={<CheckSquare size={18} />}
            title="Calidad y Convenciones"
            active={activePage === "qualityAndConventions"}
          />
        </SidebarSection> */}

        <SidebarSection title="Framework">
          <SidebarItem
            icon={<Zap size={18} />}
            title="Cypress"
            onClick={() => setCurrentPage?.("cypress")}
            active={activePage === "cypress"}
          />
          <SidebarItem
            icon={<FileCode size={18} />}
            title="Playwright"
            onClick={() => setCurrentPage?.("playwright")}
            active={activePage === "playwright"}
          />
          <SidebarItem
            icon={<FileCode size={18} />}
            title="Selenium"
            onClick={() => setCurrentPage?.("seleniumPage")}
            active={activePage === "seleniumPage"}
          />

          <SidebarItem
            icon={<FileCode size={18} />}
            title="Jmeter"
            onClick={() => setCurrentPage?.("jMeterPage")}
            active={activePage === "jMeterPage"}
          />
        </SidebarSection>

        {/*    <SidebarSection title="Artículos y Charlas">
          <SidebarItem
            icon={<Zap size={18} />}
            title="Automatización de Pruebas"
            active={activePage === "testAutomation"}
          />
          <SidebarItem
            icon={<FileCode size={18} />}
            title="Pruebas de Integración"
            active={activePage === "integrationTesting"}
          />
        </SidebarSection> */}
      </div>
    </aside>
  );
}
